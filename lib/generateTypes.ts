export type generateTypes = {
	outer: boolean,
	width: number,
	height: number,
	depth: number,
	holeDiameter: number,
	myText: string,
	textDepth: number,
	textWidth: number,
	textScale: number,
	textOffsetX: number,
	textOffsetY: number
}

export const generateTypesInitial = (): generateTypes => {
	return {
		outer: true,
		width: 70,
		height: 20,
		depth: 2,
		holeDiameter: 4,
		myText: "Gratluji!",
		textDepth: 2,
		textWidth: 4,
		textScale: 0.45,
		textOffsetX: 3,
		textOffsetY: 0
	}
}
