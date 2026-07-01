import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser, FaBookOpen } from "react-icons/fa";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All");

  return (
    <header className="navbar">

      {/* Top Navbar */}
      <div className="nav-top">

        {/* Logo */}
        <Link to="/" className="logo">
          <FaBookOpen className="logo-icon" />
          <span>BookBazar</span>
        </Link>

        {/* Search */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search books, notes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <div className="search-divider" />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>All</option>
            <option>Books</option>
            <option>Notes</option>
          </select>

          <button aria-label="Search">
            <FaSearch />
          </button>
        </div>

        {/* Right Side */}
        <div className="nav-actions">
          <Link to="/sell">
            <button className="sell-btn">+ Sell Item</button>
          </Link>

          <button className="icon-btn" aria-label="Cart">
            <FaShoppingCart />
          </button>

          <button className="login-btn">
            <FaUser />
            <span>Login</span>
          </button>
        </div>

      </div>

      {/* Bottom Menu */}
      <nav className="menu-bar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/books">Books</NavLink>
        <NavLink to="/notes">Notes</NavLink>
        <NavLink to="/marketplace">Marketplace</NavLink>
        <NavLink to="/sell">Sell</NavLink>
      </nav>

    </header>
  );
}

export default Navbar;