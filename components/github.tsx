import React, { FC, ReactNode } from "react";
import styles from "../styles/GitHub.module.scss";

type GitHubProps = {
	children: ReactNode;
};

export const GitHub: FC<GitHubProps> = ({ children }) => {
	return (
		<>
			<a
				className={styles.ghRibbon}
				href="https://github.com/czM1K3/keychain-generator"
				target="_blank"
				rel="noreferrer"
			>
				Fork me on GitHub!
			</a>
			{children}
		</>
	);
};
