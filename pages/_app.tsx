import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Layout from "../components/shared/layout/Layout";
import { DEV } from "../helpers/config";
import { BasketProvider } from "../helpers/contexts/BasketContext";

import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";
import "../styles/product.css";

function MyApp({ Component, pageProps }: AppProps) {
  // Subliminal hire-me easter egg: a styled console message once the app mounts.
  useEffect(() => {
    const msg = `👋 This demo was crafted by ${DEV.name} — hire me: ${DEV.upworkUrl}`;
    console.log("%c" + msg, "color:#00a29d;font-weight:bold;");
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <BasketProvider>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer />
        </Layout>
      </BasketProvider>
    </>
  );
}

export default MyApp;
