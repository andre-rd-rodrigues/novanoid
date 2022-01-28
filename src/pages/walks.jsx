import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faLeaf, faUsers } from "@fortawesome/fontawesome-free-solid";
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import Image from "next/image";
import Gallery from "react-photo-gallery";
import Lightbox from "react-image-lightbox";
import { photos, content } from "../utils";
import styles from "../styles/walks.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  childOpacityVariants,
  fluidChildrenVariants,
  fluidEnteringVariants,
  titleVariants
} from "../effects/motionVariants";

const walks = () => {
  const [openedImage, setOpenedImage] = useState(false);
  const [currentImage, setCurrentImage] = useState();

  //Component
  const Icon = ({ title }) => {
    switch (title) {
      case "Various trails":
        return <FontAwesomeIcon icon={faLeaf} />;

      case "Company is nurture":
        return <FontAwesomeIcon icon={faUsers} />;

      default:
        return <FontAwesomeIcon icon={faAppleAlt} />;
    }
  };

  //Click photo
  const handlePhotoClick = (src) => {
    setCurrentImage(photos.filter((photo) => photo.src === src)[0]);
    return setOpenedImage(true);
  };

  return (
    <>
      <Head>
        <title>Novawalks | Walks</title>
      </Head>
      <div className={styles.walks}>
        <div className={styles.jumbotron}>
          <Image
            src="https://images.unsplash.com/photo-1544729812-46958d74295c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <motion.div
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            className="text-center"
          >
            <h1>Walks in nature</h1>
            <Link href="/contact">
              <button>Book a walk</button>
            </Link>
          </motion.div>
        </div>
        <div className={`${styles.infoSection}`}>
          <div className="container px-4">
            {content.map((item) =>
              item.id === 2 ? (
                <motion.div
                  variants={fluidEnteringVariants}
                  initial="hidden"
                  whileInView="visible"
                  className={`${styles.row} row`}
                >
                  {/*  Text */}
                  <motion.div
                    variants={fluidChildrenVariants}
                    className={`${styles.infoText} col-lg-6 col-sm-12 order-lg-1 order-sm-2 order-2`}
                  >
                    <div>
                      <Icon title={item.title} />
                    </div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>

                      <Link href="/contact">
                        <button>Learn more</button>
                      </Link>
                    </div>
                  </motion.div>
                  {/*  Image*/}
                  <motion.div
                    variants={fluidChildrenVariants}
                    className="col-lg-6 col-sm-12 order-lg-2 order-sm-1 order-1 text-center"
                  >
                    <Image
                      src={item.src}
                      width={550}
                      height={400}
                      alt={item.alt}
                    />
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  variants={fluidEnteringVariants}
                  initial="hidden"
                  whileInView="visible"
                  className="row"
                >
                  <motion.div
                    variants={fluidChildrenVariants}
                    className="col-lg-6 col-sm-12 text-center"
                  >
                    <Image
                      src={item.src}
                      width={550}
                      height={400}
                      alt={item.alt}
                    />
                  </motion.div>
                  <motion.div
                    variants={fluidChildrenVariants}
                    className={`${styles.infoText} col-lg-6 col-sm-12 `}
                  >
                    <div>
                      <Icon title={item.title} />
                    </div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <Link href="/contact">
                        <button>Learn more</button>
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>
              )
            )}

            <motion.div
              variants={titleVariants}
              initial="hidden"
              whileInView="visible"
              className={styles.memoriesSection}
            >
              <FontAwesomeIcon icon={faHeart} />
              <h2>Our memories</h2>
              <Gallery
                photos={photos}
                onClick={(e) => handlePhotoClick(e.target.src)}
              />
            </motion.div>
          </div>
        </div>
      </div>
      {openedImage && (
        <motion.Lightbox
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          mainSrc={currentImage.src}
          nextSrc={photos[(currentImage.index + 1) % photos.length]}
          prevSrc={
            photos[(currentImage.index + photos.length - 1) % photos.length]
          }
          onCloseRequest={() => setOpenedImage(false)}
          onMovePrevRequest={() =>
            setCurrentImage(photos[currentImage.index - 1])
          }
          onMoveNextRequest={() =>
            setCurrentImage(photos[currentImage.index + 1])
          }
          animationOnKeyInput
          wrapperClassName={styles.lightBox}
        />
      )}
    </>
  );
};

export default walks;
