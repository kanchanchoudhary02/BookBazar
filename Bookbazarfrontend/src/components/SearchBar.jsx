import React from "react";
// import "./SellerBanner.css";
import { Link } from "react-router-dom";
import { FaArrowRight, FaBookOpen } from "react-icons/fa";

function SellerBanner() {
  return (
    <section className="seller">

      <div className="seller-left">

        <span className="seller-tag">
          START SELLING TODAY
        </span>

        <h2>
          Turn Your Old Books Into
          <span> Cash 💸</span>
        </h2>

        <p>
          Don't let your books collect dust.
          Sell your books, notes and PYQs directly
          to students and earn money instantly.
        </p>

        <div className="seller-btns">

          <Link to="/sell">
            <button className="seller-primary">
              Start Selling
              <FaArrowRight />
            </button>
          </Link>

          <Link to="/marketplace">
            <button className="seller-secondary">
              Browse Marketplace
            </button>
          </Link>

        </div>

      </div>

      <div className="seller-right">

        <div className="floating-card">

          <FaBookOpen className="book-icon"/>

          <h3>Sell in Minutes</h3>

          <p>
            Upload images, set price,
            and reach thousands of students.
          </p>

        </div>

      </div>

    </section>
  );
}

export default SellerBanner;