import type { AppProps } from "next/app";
import ReactTooltip from "react-tooltip";
import "../styles/globals.css";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <ReactTooltip effect="solid" />
    </>
  );
};

export default App;
