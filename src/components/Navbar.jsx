import React from "react";
import styles from "./navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/fontawesome-free-solid";

function Navbar() {
  return (
    <nav className={`${styles.navbar} navbar navbar-expand-sm fixed-top `}>
      <Link href="/">
        <a className="d-flex align-content-center">
          <Image
            alt="Novanoid logo"
            src="http://demo.rommar.in.ua/novanoid/novanoid-1/img/logo-light.png"
            width={75}
            height={20}
          />
        </a>
      </Link>
      <button
        className="navbar-toggler shadow-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <FontAwesomeIcon icon={faBars} color="white" />
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav align-items-center">
          <Link href="/">
            <a className="nav-item nav-link active" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </Link>
          <Link href="/walks">
            <a className="nav-item nav-link" href="#">
              Walks
            </a>
          </Link>

          <Link href="/aboutUs">
            <a className="nav-item nav-link" href="#">
              About us
            </a>
          </Link>

          <Link href="/contact">
            <a className="nav-item nav-link" href="#">
              Contact us
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
