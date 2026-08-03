import type { AppProps } from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import Layout from "../components/shared/layout/Layout";
import { BasketProvider } from "../helpers/contexts/BasketContext";

import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";
import "../styles/product.css";

function MyApp({ Component, pageProps }: AppProps) {
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
