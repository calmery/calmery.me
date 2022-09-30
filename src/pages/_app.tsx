import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link href="/icon.webp" rel="icon" />
        <meta content="#FFFFFF" name="theme-color" />
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
        <title>Calmery.me</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
