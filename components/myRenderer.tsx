import { Renderer } from "jscad-react";
import React, { FC, useState } from "react";
import { generateTypes } from "../lib/generateTypes";
import { keychain } from "../lib/keychain";
import { useWindowSize } from "../lib/windowSize";
import { transforms } from "@jscad/modeling";

type MyRendererProps = {
	filter: generateTypes;
};

const MyRenderer: FC<MyRendererProps> = ({ filter }) => {
	const solids = [transforms.translateX(-(filter.width / 2), keychain(filter))];
	const size = useWindowSize();
	return <Renderer solids={solids} height={size.height} width={size.width} />;
};

export default MyRenderer;
