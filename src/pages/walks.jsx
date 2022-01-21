import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBirthdayCake,
  faLeaf,
  faUsers
} from "@fortawesome/fontawesome-free-solid";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "../styles/walks.module.scss";

function walks() {
  const content = [
    {
      id: 1,
      title: "Various trails",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad dicta animi, suscipit alias voluptas quam id itaque, iure voluptate impedit commodi? Aspernatur accusantium vero quos fugiat at corporis quo?",
      src: "https://images.unsplash.com/photo-1498598457418-36ef20772bb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      alt: "Book a walk from our trails"
    },
    {
      id: 2,
      title: "Company is nurture",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad dicta animi, suscipit alias voluptas quam id itaque, iure voluptate impedit commodi? Aspernatur accusantium vero quos fugiat at corporis quo?",
      src: "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1054&q=80",
      alt: "Walk with company, bring your family"
    },
    {
      id: 3,
      title: "Meals in nature",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad dicta animi, suscipit alias voluptas quam id itaque, iure voluptate impedit commodi? Aspernatur accusantium vero quos fugiat at corporis quo?",
      src: "https://images.unsplash.com/photo-1596808488339-f530c34cb3b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      alt: "Have a break, eating lunch in nature"
    }
  ];

  const Icon = ({ title }) => {
    switch (title) {
      case "Various trails":
        return <FontAwesomeIcon icon={faLeaf} />;

      case "Company is nurture":
        return <FontAwesomeIcon icon={faUsers} />;

      default:
        return <FontAwesomeIcon icon={faBirthdayCake} />;
    }
  };

  return (
    <>
      <Head>
        <title>Novanoid | Walks</title>
      </Head>
      <div className={styles.walks}>
        <div className={styles.jumbotron}>
          <h1>Walk in nature</h1>
          <button>Book walk</button>
        </div>
        <div className={`${styles.infoSection}`}>
          <div className="container">
            {content.map((item) => (
              <div className="row mt-5">
                {item.id === 2 ? (
                  <>
                    <div
                      className={`${styles.infoText} col-lg-6 col-sm-12 order-lg-1 order-sm-2`}
                    >
                      <div>
                        <Icon title={item.title} />
                      </div>
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <button>LEARN MORE</button>
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
                  </>
                ) : (
                  <>
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
                        <button>LEARN MORE</button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default walks;
