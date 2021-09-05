import React, { FC, useEffect } from "react";
import { useRouter } from "next/router";

const errorPage: FC = () => {
	const router = useRouter();

	useEffect(() => {
		router.push("/");
	}, []);

	return <div></div>;
}

export default errorPage;
