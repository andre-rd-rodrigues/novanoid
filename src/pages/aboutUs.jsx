import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faTree } from "@fortawesome/fontawesome-free-solid";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/aboutUs.module.scss";
import Link from "next/link";

function aboutUs() {
  return (
    <>
      <Head>
        <title>Novanoid | About Us</title>
      </Head>
      <div className={styles.aboutUs}>
        <div className={styles.jumbotron}>
          <h1>About Us</h1>
        </div>
        <div className={styles.mission}>
          <div>
            <div className="text-center mb-4">
              <FontAwesomeIcon icon={faTree} size="x5" />
              <h2>Our Mission</h2>
            </div>
            <p>
              We're a tourist animation company dedicated to the Walks, groups
              and Trail Running, with the aim of creating relaxed moments deep
              into the nature. The goal is for customers to feel Madeiran for a
              few days and enjoy a wonderful vacation. In fact, we want to show
              the real healing nature.
            </p>
          </div>
        </div>
        <div className={styles.story}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-12 text-center">
                <Image
                  src="https://images.unsplash.com/photo-1522850067562-a4c60453058d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80"
                  width={400}
                  height={550}
                />
              </div>
              <div className="col-lg-6 col-sm-12">
                <h2>
                  <FontAwesomeIcon icon={faBook} />
                  Our story
                </h2>
                <p>
                  The company was founded by Trail Running athlete and mountain
                  guide Luís Fernandes, native of Madeira, who is a very
                  experienced athlete in mountain races and a deep connoisseur
                  of the trails of the Island.
                </p>
                <p>
                  In its sports curriculum, among other outstanding results, he
                  has two victories in the main trail running event organized in
                  Madeira (MIUT®), one in the distance of 85 km and another in
                  the distance of 115 km.
                </p>
                <p>
                  Internationally, he has represented Portugal several times in
                  World and European Championships of Trail Running and
                  Skyrunning. He has participated in competitions in the
                  Pyrenees and in the Alps. At the world’s premier trail running
                  event (UTMB®) he did 170km in 22 hours and 49 minutes.
                </p>
                <Link href="/team">
                  <button>Meet the team</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default aboutUs;
