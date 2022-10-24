import Head from "next/head";
import type { AppProps } from "next/app";

import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Feedback Service</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
