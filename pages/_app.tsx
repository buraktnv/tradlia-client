import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Layout from "../components/shared/layout/Layout";
import { DEV } from "../helpers/config";
import { BasketProvider } from "../helpers/contexts/BasketContext";
import { body, display } from "../helpers/fonts";

import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";
import "../styles/product.css";

function MyApp({ Component, pageProps }: AppProps) {
  // Subliminal hire-me easter egg: a styled console message once the app mounts.
  useEffect(() => {
    const msg = `👋 This demo was crafted by ${DEV.name} — hire me: ${DEV.upworkUrl}`;
    console.log("%c" + msg, "color:#1F8B92;font-weight:bold;");
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      {/* `contents` wrapper: carries the next/font CSS variables app-wide
          without introducing a box that breaks the #__next h-full chain. */}
      <div className={`${display.variable} ${body.variable} contents`}>
        <BasketProvider>
          <Layout>
            <Component {...pageProps} />
            <ToastContainer />
          </Layout>
        </BasketProvider>
      </div>
    </>
  );
}

export default MyApp;
