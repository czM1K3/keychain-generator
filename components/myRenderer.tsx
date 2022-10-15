import { Renderer } from "jscad-react";
import React, { FC } from "react";
import { generateTypes } from "../lib/generateTypes";
import { keychain } from "../lib/keychain";
import { useWindowSize } from "../lib/windowSize";

type MyRendererProps = {
	filter: generateTypes;
};

const MyRenderer: FC<MyRendererProps> = ({ filter }) => {
	const solids = [keychain(filter)];
	const size = useWindowSize();
	return (
		<Renderer
			solids={solids}
			height={size.height}
			width={size.width}
			options={{
				gridOptions: {
					size: [60, 250],
					color: [0.6, 0.6, 0.6, 2],
					subColor: [0.85, 0.9, 0.95, 2],
				},
				axisOptions: {
					show: false,
				},
				viewerOptions: {
					initialPosition: [0, 10, 10],
				},
			}}
		/>
	);
};

export default MyRenderer;
