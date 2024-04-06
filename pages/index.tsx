import React, { FC, useState } from "react";
import dynamic from "next/dynamic";
import Menu from "../components/menu";
import { generateTypesInitial } from "../lib/generateTypes";
import Head from "next/head";
import { GitHub } from "../components/github";

const Index: FC = () => {
	const [filter, setFilter] = useState(generateTypesInitial());

	const MyRendrer = dynamic(() => import("../components/myRenderer"), {
		ssr: false,
	});

	return (
		<GitHub>
			<Head>
				<title>Keychain Generator</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Menu useFilter={[filter, setFilter]} />
			<MyRendrer filter={filter} />
			<p className="loading">Loading...</p>
		</GitHub>
	);
};

export default Index;
