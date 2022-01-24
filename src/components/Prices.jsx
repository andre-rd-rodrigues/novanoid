import React from "react";
import styles from "./prices.module.scss";

function Prices() {
  const prices = [
    {
      id: 1,
      name: "Basic",
      price: 19.99,
      description: ["2 Trails", "2 People Allowed", "1 lunch"]
    },
    {
      id: 2,
      name: "Enthusiast",
      price: 24.99,
      description: ["5 Trails", "5 People Allowed", "4 lunch"]
    },
    {
      id: 3,
      name: "Lifestyle",
      price: 39.99,
      description: ["Unlimited Trails", "10 People Allowed", "10 lunch"]
    }
  ];
  return (
    <div id={styles.pricesSection}>
      <h2>OUR PRICING</h2>
      <p>Discover, taste, and feel the outdoor adventures</p>
      <div className={`${styles.container}container`}>
        <div className={`${styles.priceRow} row`}>
          {prices.map((item) => (
            <div className={`${styles.priceCol}`}>
              <h4>{item.name}</h4>
              <h3>
                <span>$</span>
                {item.price}
              </h3>
              <div>
                {item.description.map((feature) => (
                  <p>{feature}</p>
                ))}
              </div>
              <button className={styles.pricesLearn}>Learn more</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Prices;
