import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHamburger,
  faHeart,
  faLeaf,
  faUsers
} from "@fortawesome/fontawesome-free-solid";
import Head from "next/head";
import Image from "next/image";
import Gallery from "react-photo-gallery";
import Lightbox from "react-image-lightbox";
import { photos, content } from "../utils";
import styles from "../styles/walks.module.scss";
import Link from "next/link";

const walks = () => {
  const [openedImage, setOpenedImage] = useState(false);
  const [currentImage, setCurrentImage] = useState();

  const Icon = ({ title }) => {
    switch (title) {
      case "Various trails":
        return <FontAwesomeIcon icon={faLeaf} />;

      case "Company is nurture":
        return <FontAwesomeIcon icon={faUsers} />;

      default:
        return <FontAwesomeIcon icon={faHamburger} />;
    }
  };
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
          <h1>Walks in nature</h1>
          <Link href="/contact">
            <button>Book a walk</button>
          </Link>
        </div>
        <div className={`${styles.infoSection}`}>
          <div className="container">
            {content.map((item) =>
              item.id === 2 ? (
                <div className={`${styles.row} row`}>
                  <div
                    className={`${styles.infoText} col-lg-6 col-sm-12 order-lg-1 order-sm-2`}
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
                  </div>
                  <div className="col-lg-6 col-sm-12 order-lg-2 order-sm-1">
                    <Image
                      src={item.src}
                      width={550}
                      height={400}
                      alt={item.alt}
                    />
                  </div>
                </div>
              ) : (
                <div className="row">
                  <div className="col-lg-6 col-sm-12 ">
                    <Image
                      src={item.src}
                      width={550}
                      height={400}
                      alt={item.alt}
                    />
                  </div>
                  <div className={`${styles.infoText} col-lg-6 col-sm-12 `}>
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
                  </div>
                </div>
              )
            )}

            <div className={styles.memoriesSection}>
              <FontAwesomeIcon icon={faHeart} />
              <h2>Our memories</h2>
              <Gallery
                photos={photos}
                onClick={(e) => handlePhotoClick(e.target.src)}
              />
            </div>
          </div>
        </div>
      </div>
      {openedImage && (
        <Lightbox
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
