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
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-126557808-2"
        />
        <script>
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-126557808-2');`}
        </script>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
