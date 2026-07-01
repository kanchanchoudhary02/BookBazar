import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaBookOpen,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaArrowRight,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      {/* Top Wave */}
      <div className="footer-wave" />

      <div className="footer-inner">

        {/* Grid */}
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <FaBookOpen />
              <span>BookBazar</span>
            </div>
            <p>
              India's student marketplace for buying and
              selling second-hand books and notes at the
              best prices.
            </p>
            {/* Social Icons */}
            <div className="social-icons">
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/books">Books</Link></li>
              <li><Link to="/notes">Notes</Link></li>
              <li><Link to="/marketplace">Marketplace</Link></li>
              <li><Link to="/sell">Sell Item</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-col">
            <h3>Support</h3>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-col">
            <h3>Stay Updated</h3>
            <p className="newsletter-desc">
              Get notified about new books and best deals!
            </p>
            <div className="newsletter-box">
              <input
                type="email"
                placeholder="Enter your email"
              />
              <button aria-label="Subscribe">
                <FaArrowRight />
              </button>
            </div>
            <p className="newsletter-note">
              🔒 No spam. Unsubscribe anytime.
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Copyright */}
        <div className="footer-bottom">
          <p>
            © 2026 <span>BookBazar</span>. All Rights Reserved.
          </p>
          <p className="made-with">
            Made with <FaHeart className="heart-icon" /> for Students
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;