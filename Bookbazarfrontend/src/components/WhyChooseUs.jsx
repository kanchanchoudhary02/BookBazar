import React from "react";
import "./WhyChooseUs.css";
import features from "../data/features";

function WhyChooseUs() {
  return (
    <section className="why-wrapper">
      <div className="why">

        {/* Section Title */}
        <div className="section-title">
          <span className="section-tag">✦ Why BookBazar</span>
          <h2>Why Students <span>Love Us</span></h2>
          <p>Everything a student needs — at prices that make sense.</p>
        </div>

        {/* Grid */}
        <div className="why-grid">
          {features.map((item, index) => (
            <div
              className="why-card"
              key={index}
              style={{ "--glow": item.glow, "--lightBg": item.lightBg }}
            >
              {/* Icon */}
              <div className="why-icon-wrap">
                <div
                  className="why-icon"
                  style={{ background: item.gradient }}
                >
                  {item.icon}
                </div>
              </div>

              {/* Text */}
              <h3>{item.title}</h3>
              <p>{item.desc}</p>

              {/* Bottom accent line */}
              <div
                className="why-card-line"
                style={{ background: item.gradient }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;