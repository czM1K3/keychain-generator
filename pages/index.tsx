import React, { FC, useEffect, useState } from "react";
import { serialize } from "@jscad/stl-serializer";
import { keyring } from "../lib/keyring";
import { Renderer } from "jscad-react";
import dynamic from "next/dynamic";
import Menu from "../components/menu";
import { generateTypesInitial } from "../lib/generateTypes";

const Index: FC = () => {
	const [filter, setFilter] = useState(generateTypesInitial());

	useEffect(() => {
		// const rawData = serialize({ binary: true }, cuboidWithInnerText(70, 20, 2, 4, "Gratuluji!", 2, 4, 0.45, 3, 0));
		// const blob = new Blob(rawData);
		// const blobUrl = URL.createObjectURL(blob);
		// const tempLink = document.createElement("a");
		// tempLink.href = blobUrl;
		// tempLink.setAttribute("download", "output.stl");
		// tempLink.click();
	}, []);

  const MyRendrer = dynamic(
    () => import("../components/myRenderer"),
    { ssr: false }
  )

  return (
    <>
		<Menu useFilter={[filter,setFilter]} />
      	<MyRendrer filter={filter} />
    </>
  )
};

export default Index;
