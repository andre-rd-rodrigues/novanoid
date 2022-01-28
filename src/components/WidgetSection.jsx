import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faLaptop, faEye } from "@fortawesome/fontawesome-free-solid";
import styles from "./widget.module.scss";
import { motion } from "framer-motion";
import {
  fluidChildrenVariants,
  fluidEnteringVariants
} from "../effects/motionVariants";

function WidgetSection() {
  return (
    <div className={`${styles.widgetSection} container`}>
      <motion.div
        variants={fluidEnteringVariants}
        initial="hidden"
        whileInView="visible"
        className={`${styles.widgetsRow} row`}
      >
        <motion.div
          variants={fluidChildrenVariants}
          className={`${styles.widget} col-lg-4 col-sm-12`}
        >
          <FontAwesomeIcon icon={faLeaf} />
          <div>
            <h2>FOREST WALKS</h2>
            <p>
              Explore nature and enjoy a wonderful vacation. Our services are
              small group walks or private walks, we also have one week group
              programs that include multi-level walks as well as island van
              tours.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={fluidChildrenVariants}
          className={`${styles.widget} col-lg-4 col-sm-12`}
        >
          <FontAwesomeIcon icon={faLaptop} />
          <div>
            <h2>VIRTUAL TOURS</h2>
            <p>
              Virtual Reality is mostly known among gamers, but VR headsets are
              also a great tool for travelers who want to relax and immerse
              themselves in nature, or for travelers who want to broaden their
              world view by virtually stepping into places they can’t
              logistically reach.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={fluidChildrenVariants}
          className={`${styles.widget} col-lg-4 col-sm-12`}
        >
          <FontAwesomeIcon icon={faEye} />
          <div>
            <h2>MINDFULNESS</h2>
            <p>
              Mindful attention to nature may help people maximize their
              experience, even when exposure is brief. That is, to the extent
              that nature is inherently beneficial, being more aware of it may
              boost subjective appreciation.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default WidgetSection;
