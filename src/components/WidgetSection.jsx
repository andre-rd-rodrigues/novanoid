import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faLaptop, faEye } from "@fortawesome/fontawesome-free-solid";
import styles from "./widget.module.scss";

function WidgetSection() {
  return (
    <div className={`${styles.widgetSection} container`}>
      <div className={`${styles.widgetsRow} row`}>
        <div className={`${styles.widget} col-lg-4 col-sm-12`}>
          <FontAwesomeIcon icon={faLeaf} />
          <div>
            <h2>FOREST WALKS</h2>
            <p>
              Nulla fringilla urna ac urna volutpat, quis congue massa
              dignissim. Suspendisse quis orci id dolor vehicula porta quis in
              dolor. Phasellus volutpat metus.
            </p>
          </div>
        </div>
        <div className={`${styles.widget} col-lg-4 col-sm-12`}>
          <FontAwesomeIcon icon={faLaptop} />
          <div>
            <h2>REMOTE MEETINGS</h2>
            <p>
              Ut magna diam, placerat ac diam et, ornare volutpat libero.
              Curabitur erat nisl, sollicitudin sit amet rhoncus interdum,
              adipiscing aliquet est.
            </p>
          </div>
        </div>
        <div className={`${styles.widget} col-lg-4 col-sm-12`}>
          <FontAwesomeIcon icon={faEye} />
          <div>
            <h2>MINDFULNESS</h2>
            <p>
              Phasellus eget massa quam. Cras mi purus, accumsan id pretium sed,
              faucibus quis diam. Maecenas aliquet, lacus a porttitor porta,
              sapien.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WidgetSection;
