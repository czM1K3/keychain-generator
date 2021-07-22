import React, { FC, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Menu from "../components/menu";
import { generateTypesInitial } from "../lib/generateTypes";
import Head from "next/head";

const Index: FC = () => {
	const [filter, setFilter] = useState(generateTypesInitial());

	useEffect(() => {

	}, []);

  const MyRendrer = dynamic(
    () => import("../components/myRenderer"),
    { ssr: false }
  )

  return (
    <>
      <Head>
        <title>Keyring generator</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
		  <Menu useFilter={[filter,setFilter]} />
      <MyRendrer filter={filter} />
    </>
  )
};

export default Index;
