import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBirthdayCake,
  faLeaf,
  faUsers
} from "@fortawesome/fontawesome-free-solid";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/aboutUs.module.scss";

function aboutUs() {
  return (
    <>
      <Head>
        <title>Novanoid | About Us</title>
      </Head>
      <div className={styles.aboutUs}>
        <div className={styles.jumbotron}>
          <h1>Walk in nature</h1>
          <button>Book walk</button>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default aboutUs;
