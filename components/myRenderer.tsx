import { Renderer } from "jscad-react";
import React, { FC, useState } from "react";
import { generateTypes } from "../lib/generateTypes";
import { keyring } from "../lib/keyring";
import { useWindowSize } from "../lib/windowSize";

type myRendererProps = {
	filter: generateTypes;
}

const myRenderer: FC<myRendererProps> = ({filter}) => {
	const [a] = useState([keyring(filter)]);
	const size = useWindowSize();
	return <Renderer solids={a} height={size.height} width={size.width} />
}

export default myRenderer;
