import { AppProps } from "next/app";
import "../styles/main.scss";

const App = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />;
};

export default App;
