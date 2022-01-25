import { useEffect } from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import Head from "next/head";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.css";
import "react-image-lightbox/style.css";
import "../styles/globals.scss";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
