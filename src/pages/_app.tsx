import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link href="/favicon.ico" rel="icon" />

        <meta name="description" content="Calmeryのプロフィールページです。" />
        <meta
          name="format-detection"
          content="address=no, email=no, telephone=no"
        />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@calmeryme" />
        <meta
          name="twitter:description"
          content="Calmeryのプロフィールページです。"
        />
        <meta name="twitter:site" content="@calmeryme" />
        <meta name="twitter:title" content="Calmery.me" />
        <meta name="twitter:image" content="/icon.jpg" />

        {/* Open Graph */}
        <meta
          property="og:description"
          content="Calmeryのプロフィールページです。"
        />
        <meta property="og:image" content="/icon.jpg" />
        <meta property="og:image:height" content="256" />
        <meta property="og:image:width" content="256" />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:site_name" content="Calmery.me" />
        <meta property="og:title" content="Calmery.me" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://calmery.me" />
        <meta property="profile:first_name" content="Marei" />
        <meta property="profile:last_name" content="Watanabe" />
        <meta property="profile:gender" content="male" />
        <meta property="profile:username" content="Calmery" />

        <title>Calmery.me</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
