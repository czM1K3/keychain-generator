import jscad from "@jscad/modeling";
import { generateTypes } from "./generateTypes";
const { primitives, booleans, text, hulls, transforms, extrusions } = jscad;
const { hullChain } = hulls;
const { translate, scale } = transforms;
const { cylinder, cuboid, circle } = primitives;
const { subtract, union } = booleans;
const { vectorText } = text;
const { extrudeLinear } = extrusions;

const buildFlatText = (
	message: string,
	extrusionHeight: number,
	characterLineWidth: number
) => {
	if (message === undefined || message.length === 0) return [];

	const lineRadius = characterLineWidth / 2;
	const lineCorner = circle({ radius: lineRadius });

	const lineSegmentPointArrays = vectorText({ xOffset: 0, yOffset: 0 }, message); // line segments for each character
	const lineSegments = [];
	lineSegmentPointArrays.map((segmentPoints) => {
		// process the line segment
		const corners = segmentPoints.map((point) => translate(point, lineCorner));
		lineSegments.push(hullChain(corners));
	});
	const message2D = union(lineSegments);
	const message3D = extrudeLinear({ height: extrusionHeight }, message2D);
	return translate([0, 0, 0], message3D);
};

const halfCylinder = (width: number, depth: number) => {
	return subtract(
		cylinder({
			radius: width / 2,
			height: depth,
		}),
		cuboid({
			size: [width, width, depth],
			center: [width / 2, 0, 0],
		})
	);
};

const baseCuboid = (
	width: number,
	height: number,
	depth: number,
	holeDiameter: number
) => {
	return subtract(
		union(
			cuboid({
				size: [width, height, depth],
				center: [width / 2, 0, 0],
			}),
			halfCylinder(height, depth)
		),
		cylinder({
			height: depth,
			radius: holeDiameter,
		})
	);
};

const cuboidWithOuterText = ({
	width,
	height,
	depth,
	holeDiameter,
	myText,
	textDepth,
	textWidth,
	textScale,
	textOffsetX,
	textOffsetY,
}: generateTypes) => {
	return union(
		baseCuboid(width, height, depth, holeDiameter),
		translate(
			[textOffsetX + 2, textOffsetY - textScale * 10, depth - 1],
			scale([textScale, textScale, 1], buildFlatText(myText, textDepth, textWidth))
		)
	);
};

const cuboidWithInnerText = ({
	width,
	height,
	depth,
	holeDiameter,
	myText,
	textDepth,
	textWidth,
	textScale,
	textOffsetX,
	textOffsetY,
}: generateTypes) => {
	//TODO Don'n make hole with text
	return subtract(
		baseCuboid(width, height, depth, holeDiameter),
		translate(
			[textOffsetX + 2, textOffsetY - textScale * 10, -1],
			scale(
				[textScale, textScale, 100],
				buildFlatText(myText, textDepth, textWidth)
			)
		)
	);
};

export const keychain = (input: generateTypes) => {
	return input.outer ? cuboidWithOuterText(input) : cuboidWithInnerText(input);
};
