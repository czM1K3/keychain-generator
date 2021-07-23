export type generateTypes = {
	outer: boolean;
	width: number;
	height: number;
	depth: number;
	holeDiameter: number;
	myText: string;
	textDepth: number;
	textWidth: number;
	textScale: number;
	textOffsetX: number;
	textOffsetY: number;
};

export const generateTypesInitial = (): generateTypes => {
	return {
		outer: true,
		width: 60,
		height: 20,
		depth: 2,
		holeDiameter: 4,
		myText: "Gratluji!",
		textDepth: 2,
		textWidth: 4,
		textScale: 0.45,
		textOffsetX: 3,
		textOffsetY: 0,
	};
};

export const checkGenerateTypes = (input: generateTypes): boolean => {
	return ![
		input.width >= 30,
		input.height >= 10,
		input.depth > 0,
		input.holeDiameter > 0,
		input.myText.length > 0,
		input.textDepth > 0,
		input.textWidth > 1,
		input.textScale > 0,
		input.textOffsetX >= -10,
		input.textOffsetY >= -10,
	].includes(false);
};
