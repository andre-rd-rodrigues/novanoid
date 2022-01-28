import React from "react";
import styles from "../styles/team.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faTree } from "@fortawesome/fontawesome-free-solid";
import Head from "next/head";
import Image from "next/image";
import Slider from "react-slick";
import Gallery from "react-photo-gallery";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  fluidChildrenVariants,
  fluidEnteringVariants,
  titleVariants,
  childOpacityVariants,
  hoverVariant
} from "../effects/motionVariants";

function team() {
  const teamMembers = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      src: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit itaque laboriosam enim voluptas! Cupiditate quae repellat dolorum. Voluptas nobis hic nostrum consectetur facilis nulla voluptatem accusamus beatae. Fugit, nulla repudiandae."
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=600&q=60",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit itaque laboriosam enim voluptas! Cupiditate quae repellat dolorum. Voluptas nobis hic nostrum consectetur facilis nulla voluptatem accusamus beatae. Fugit, nulla repudiandae."
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      src: "https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHBlcnNvbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=600&q=60",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit itaque laboriosam enim voluptas! Cupiditate quae repellat dolorum. Voluptas nobis hic nostrum consectetur facilis nulla voluptatem accusamus beatae. Fugit, nulla repudiandae."
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      src: "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlcnNvbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=600&q=60",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit itaque laboriosam enim voluptas! Cupiditate quae repellat dolorum. Voluptas nobis hic nostrum consectetur facilis nulla voluptatem accusamus beatae. Fugit, nulla repudiandae."
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHBlcnNvbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=600&q=60",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit itaque laboriosam enim voluptas! Cupiditate quae repellat dolorum. Voluptas nobis hic nostrum consectetur facilis nulla voluptatem accusamus beatae. Fugit, nulla repudiandae."
    },
    {
      id: 6,
      name: "Dennis Schulist",
      username: "Leopoldo_Corkery",
      src: "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHBlcnNvbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=600&q=60",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit itaque laboriosam enim voluptas! Cupiditate quae repellat dolorum. Voluptas nobis hic nostrum consectetur facilis nulla voluptatem accusamus beatae. Fugit, nulla repudiandae."
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      src: "https://images.unsplash.com/photo-1492567291473-fe3dfc175b45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHBlcnNvbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=600&q=60",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit itaque laboriosam enim voluptas! Cupiditate quae repellat dolorum. Voluptas nobis hic nostrum consectetur facilis nulla voluptatem accusamus beatae. Fugit, nulla repudiandae."
    }
  ];
  const VerticalCircles = () => {
    let circles = [1, 2, 3, 4];
    return circles.map(() => <div className={styles.circle} />);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 1600,
    autoplay: true,
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    centerMode: true
  };

  return (
    <>
      <Head>
        <title>Novawalks | Meet the team</title>
      </Head>
      <div className={styles.team}>
        <div className={styles.diagonalSVG}></div>
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className={styles.title}
        >
          <h1>Meet the team</h1>
          <motion.p variants={childOpacityVariants}>
            Responsible for creating amazing memories
          </motion.p>
        </motion.div>
        <motion.div
          variants={fluidEnteringVariants}
          initial="hidden"
          whileInView="visible"
          className={styles.teamSection}
        >
          <Slider {...settings}>
            {teamMembers.map((member) => (
              <motion.div
                variants={fluidChildrenVariants}
                className={styles.teamBox}
                key={member.id}
              >
                <span className={styles.diagonalSpan} />
                <Image src={member.src} width={300} height={450} />
                <div className={styles.teamText}>
                  <div className={styles.presentation}>
                    <h4>{member.name}</h4>
                    <p>{member.username}</p>
                  </div>
                  <div className={styles.description}>
                    <p>{member.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </motion.div>
        <div className={styles.verticalCircles}>
          <VerticalCircles />
        </div>
        <motion.div
          variants={fluidEnteringVariants}
          initial="hidden"
          whileInView="visible"
          className={`${styles.join} px-4`}
        >
          <motion.h2 variants={fluidChildrenVariants}>
            Rea dy to join us?
          </motion.h2>
          <motion.p variants={fluidChildrenVariants}>
            Book a walk and start your journey with Novawalks.
          </motion.p>
          <Link href="/contact">
            <motion.button
              variants={fluidChildrenVariants}
              whileHover={hoverVariant}
            >
              Book a walk
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </>
  );
}

export default team;
