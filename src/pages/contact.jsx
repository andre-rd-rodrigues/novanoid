import React from "react";
import Head from "next/head";
import styles from "../styles/contact.module.scss";
import Toast from "../components/Toast";

function contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    return Toast(
      "success",
      "Thank you for getting in touch! We appreciate you contacting us Novawalks."
    );
  };

  return (
    <>
      <Head>
        <title>Novawalks | Contact Us</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className={styles.contactUs}>
        <div className={styles.title}>
          <h1>Contact Us</h1>
          <p>We would love to hear from you!</p>
        </div>
        <div className={styles.formContainer}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="col">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div class="form-group my-4">
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Subject"
                required
              />
            </div>
            <div class="form-group">
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Your message here..."
                required
              />
            </div>
            <div className="text-center">
              <button type="submit">Send message</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default contact;
