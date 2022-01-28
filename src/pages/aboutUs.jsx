import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faTree } from "@fortawesome/fontawesome-free-solid";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/aboutUs.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  titleVariants,
  fluidEnteringVariants,
  fluidChildrenVariants,
  hoverVariant
} from "../effects/motionVariants";

function aboutUs() {
  return (
    <>
      <Head>
        <title>Novawalks | About Us</title>
      </Head>
      <div className={styles.aboutUs}>
        <div className={styles.jumbotron}>
          <motion.h1
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            About Us
          </motion.h1>
        </div>
        <div className={`${styles.mission} px-4`}>
          <motion.div
            variants={fluidEnteringVariants}
            initial="hidden"
            whileInView="visible"
          >
            <div className="text-center mb-4">
              <motion.div variants={fluidChildrenVariants}>
                <FontAwesomeIcon icon={faTree} size="x5" />
              </motion.div>

              <motion.h2 variants={fluidChildrenVariants}>
                Our Mission
              </motion.h2>
            </div>
            <motion.p variants={fluidChildrenVariants}>
              We're a tourist animation company dedicated to the walks, groups,
              trail running, and food experiences with the aim of creating
              relaxed moments deep into the nature. The goal is for customers to
              feel calm, and in tuned for a few days and enjoy a wonderful
              vacation. In fact, we want to show the real healing nature.
            </motion.p>
          </motion.div>
        </div>
        <div className={styles.story}>
          <div className="container px-4">
            <motion.div
              className="row"
              variants={fluidEnteringVariants}
              initial="hidden"
              whileInView="visible"
            >
              <motion.div
                variants={fluidChildrenVariants}
                className="col-lg-6 col-sm-12 text-center"
              >
                <Image
                  src="https://images.unsplash.com/photo-1522850067562-a4c60453058d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80"
                  width={400}
                  height={550}
                />
              </motion.div>
              <div className="col-lg-6 col-sm-12">
                <motion.h2 variants={fluidChildrenVariants}>
                  <FontAwesomeIcon icon={faBook} />
                  Our story
                </motion.h2>
                <motion.p variants={fluidChildrenVariants}>
                  The company was founded by Trail Running athlete and mountain
                  guide John Walton, who is a very experienced athlete in
                  mountain races and a deep connoisseur of the trails of the
                  location.
                </motion.p>
                <motion.p variants={fluidChildrenVariants}>
                  We are passionate about nature and we love sharing it with
                  fellow travelers with a taste for adventure. Here you can
                  learn a bit more about the background of our team, see our
                  fleet of super-jeeps and super-trucks, read a bit about
                  nature, geography, geology and history, find answers to a few
                  common questions and check the terms and conditions. If you
                  don’t find what you are looking for, please don’t hesitate to
                  drop us an email and we will do our very best to help.
                </motion.p>

                <Link href="/team">
                  <motion.button
                    variants={fluidChildrenVariants}
                    whileHover={hoverVariant}
                  >
                    Meet the team
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default aboutUs;
