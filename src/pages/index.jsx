import Head from "next/head";
import Prices from "../components/Prices";
import WidgetSection from "../components/WidgetSection";
import { motion } from "framer-motion";
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Novawalks | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/5.15/css/font-
awesome.min.css"
          rel="stylesheet"
          integrity="sha384-
wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossorigin="anonymous"
        />
      </Head>
      <div className={styles.welcomePage}>
        <h1>NOVAWALKS</h1>
        <p>nature heals</p>
      </div>
      <WidgetSection />
      <Prices />
    </>
  );
}
