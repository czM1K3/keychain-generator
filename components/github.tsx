import React, { FC } from "react";
import styles from "../styles/GitHub.module.scss";

export const GitHub: FC = ({ children }) => {
	return (
		<>
			<a className={styles.ghRibbon} href="https://github.com/czM1K3/keychain-generator" target="_blank">Fork me on GitHub!</a>
			{children}
		</>
	);
};
