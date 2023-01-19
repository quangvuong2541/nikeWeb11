import React from "react";
import "./index.css";

export const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__container">
        <h2>Trending</h2>
        <figure>
          <img src="./assets/images/banner.jpg" alt="banner" />
        </figure>
        <div className="banner__content">
          <p>Summer Essentials</p>
          <h3>NEVER DONE SUMMERING</h3>
          <p>
            Play. Let loose. Repeat. This season, turn it up in styles made for
            living life to the max.
          </p>
          <button>Shop</button>
        </div>
      </div>
    </section>
  );
};
