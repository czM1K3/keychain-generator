import React, { FC, useEffect } from "react";
import { useRouter } from "next/router";

const ErrorPage: FC = () => {
	const router = useRouter();

	useEffect(() => {
		router.push("/");
	}, [router]);

	return <div></div>;
};

export default ErrorPage;
