import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import styles from "./footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={`${styles.footerRow} row`}>
          <div className="col">
            <Image
              alt="Novanoid logo"
              src="http://demo.rommar.in.ua/novanoid/novanoid-1/img/logo-light.png"
              width={78}
              height={23}
            />
          </div>
          <div className={`${styles.social} col`}>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>
      </div>

      <p>Copyright © 2021 by André Rodrigues. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
