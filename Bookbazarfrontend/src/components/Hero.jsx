import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">
        <h1>
          Buy & Sell Study Materials
          <br />
          at <span>Best Prices</span>
        </h1>

        <p>
          Find books, notes and PYQs at unbeatable prices.
          Sell your used study materials and help others.
        </p>

        <div className="hero-buttons">
          <button>Browse Marketplace</button>
          <button>Sell Your Item</button>
        </div>
      </div>

      <div className="hero-right">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
          alt="Study"
        />
      </div>

    </section>
  );
}

export default Hero;