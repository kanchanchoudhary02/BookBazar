import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <h1>Buy & Sell Books, Notes & Study Materials</h1>

      <h2>
        Find affordable books, handwritten notes, PYQs and study resources
        shared by students across colleges.
      </h2>

      <div className="hero-buttons">
        <button>Browse Marketplace</button>
        <button>Sell Item</button>
      </div>
    </div>
  );
}

export default Hero;