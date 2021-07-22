import { Renderer } from "jscad-react";
import React, { FC, useState } from "react";
import { generateTypes } from "../lib/generateTypes";
import { keyring } from "../lib/keyring";
import { useWindowSize } from "../lib/windowSize";
import { transforms } from "@jscad/modeling";

type myRendererProps = {
	filter: generateTypes;
}

const myRenderer: FC<myRendererProps> = ({filter}) => {
	const [a] = useState([transforms.translateX(-(filter.width / 2), keyring(filter))]);
	const size = useWindowSize();
	return <Renderer solids={a} height={size.height} width={size.width} />
}

export default myRenderer;
