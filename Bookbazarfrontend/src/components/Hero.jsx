import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import { FaBook, FaFileAlt, FaArrowRight, FaTag } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="hero">

        {/* Left Side */}
        <div className="hero-left">

          <span className="hero-tag">
            📚 India's Student Marketplace
          </span>

          <h1>
            Buy & Sell <br />
            <span>Books & Notes</span><br />
            at Best Price
          </h1>

          <p>
            Save money by buying second-hand books or earn by selling
            your old study material. Everything students need — in one place.
          </p>

          <div className="hero-buttons">
            <Link to="/marketplace">
              <button className="primary-btn">
                Explore Marketplace
                <FaArrowRight className="btn-icon" />
              </button>
            </Link>

            <Link to="/sell">
              <button className="secondary-btn">
                <FaTag className="btn-icon" />
                Sell Your Item
              </button>
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <h2>5K+</h2>
              <p>Books Listed</p>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <h2>3K+</h2>
              <p>Students</p>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <h2>800+</h2>
              <p>Notes</p>
            </div>
          </div>

        </div>

        {/* Right Side */}
        <div className="hero-right">

          {/* Decorative Circles */}
          <div className="circle circle-main" />
          <div className="circle circle-sm1" />
          <div className="circle circle-sm2" />

          {/* Cards */}
          <div className="float-card card1">
            <div className="card-icon-wrap icon-purple">
              <FaBook />
            </div>
            <h3>Books</h3>
            <p>Engineering & More</p>
            <span className="card-badge">5K+ Listed</span>
          </div>

          <div className="float-card card2">
            <div className="card-icon-wrap icon-blue">
              <FaFileAlt />
            </div>
            <h3>Notes</h3>
            <p>Semester Wise</p>
            <span className="card-badge">800+ Available</span>
          </div>

          {/* Small floating tag */}
          <div className="mini-card">
            🎉 Save up to <strong>70%</strong>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;