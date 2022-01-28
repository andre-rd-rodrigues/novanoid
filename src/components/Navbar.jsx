import React, { useEffect } from "react";
import styles from "./navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/fontawesome-free-solid";

function Navbar() {
  const collapseAfterClick = () => {
    const collapseDiv = document.querySelector(".navbar-collapse");
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((item) => {
      item.addEventListener("click", () => {
        collapseDiv.setAttribute(
          "class",
          "collapse navbar-collapse justify-content-end"
        );
      });
    });
  };

  useEffect(() => {
    collapseAfterClick();
  }, []);
  return (
    <nav className={`${styles.navbar} navbar navbar-expand-sm fixed-top `}>
      <Link href="/">
        <a className="d-flex align-content-center nav-item">
          <Image
            alt="Novawalks logo"
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
        data-bs-target="#navBarContentDiv"
        aria-controls="navBarContentDiv"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <FontAwesomeIcon icon={faBars} color="white" />
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navBarContentDiv"
      >
        <div className="navbar-nav align-items-center">
          <Link href="/" as="/">
            <a className="nav-item nav-link active" href="/">
              Home
            </a>
          </Link>

          <Link href="/walks">
            <a className="nav-item nav-link">Walks</a>
          </Link>

          <Link href="/aboutUs">
            <a className="nav-item nav-link">About us</a>
          </Link>
          <Link href="/team">
            <a className="nav-item nav-link">Team</a>
          </Link>

          <Link href="/contact">
            <a className="nav-item nav-link">Contact us</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
