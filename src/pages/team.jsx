import React from "react";
import styles from "../styles/team.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faTree } from "@fortawesome/fontawesome-free-solid";
import Head from "next/head";
import Image from "next/image";

function team() {
  return (
    <>
      <Head>
        <title>Novanoid | Meet the team</title>
      </Head>
      <div className={styles.team}>
        <div className={styles.diagonalSVG}></div>
        <div className={styles.title}>
          <h1>Meet the team</h1>
          <p>Responsible for creating amazing memories</p>
        </div>
      </div>
    </>
  );
}

export default team;
