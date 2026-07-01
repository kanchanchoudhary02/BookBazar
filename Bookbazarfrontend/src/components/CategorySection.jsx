import React from "react";
import "./CategorySection.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import categories from "../data/categories";

function CategorySection() {
  return (
    <section className="categories-wrapper">
      <div className="categories">

        {/* Section Title */}
        <div className="section-title">
          <span className="section-tag">✦ Explore</span>
          <h2>Browse <span>Categories</span></h2>
          <p>Everything you need for your studies — in one place.</p>
        </div>

        {/* Grid */}
        <div className="category-grid">
          {categories.map((item, index) => (
            <Link to={item.link} key={index} className="category-link">
              <div
                className="category-card"
                style={{ "--glow": item.glow, "--lightBg": item.lightBg }}
              >

                {/* Icon */}
                <div
                  className="category-icon"
                  style={{ background: item.lightBg }}
                >
                  <span
                    className="icon-inner"
                    style={{ background: item.gradient }}
                  >
                    {item.icon}
                  </span>
                </div>

                {/* Text */}
                <div className="category-text">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>

                {/* Arrow */}
                <div
                  className="category-arrow"
                  style={{ background: item.lightBg, color: "inherit" }}
                >
                  <FaArrowRight />
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CategorySection;