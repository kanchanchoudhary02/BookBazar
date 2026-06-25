import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        📚 Study Bazar
      </div>

      {/* Search */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search books, notes, PYQs..."
        />

        <select>
          <option>All Categories</option>
          <option>Books</option>
          <option>Notes</option>
          <option>PYQs</option>
        </select>

        <button>🔍</button>
      </div>

      {/* Right Side */}
      <div className="nav-actions">

        <button className="sell-btn">
          Sell Your Item
        </button>

        <button className="cart-btn">
          🛒
        </button>

        <button className="login-btn">
          Login / Signup
        </button>

      </div>
      

    </nav>
    <div className="menu-bar">
  <ul className="menu-links">
    <li>
     <NavLink
  to="/"
  className={({ isActive }) =>
    isActive ? "active" : ""
  }
>
  Home
</NavLink>
    </li>

    <li>
      <Link to="/books">Books</Link>
    </li>

    <li>
      <Link to="/notes">Notes</Link>
    </li>

    <li>
      <Link to="/pyqs">PYQs</Link>
    </li>

    <li>
      <Link to="/deals">Deals</Link>
    </li>

    <li>
      <Link to="/new-arrivals">New Arrivals</Link>
    </li>
  </ul>

  <div className="menu-right">
    <span>♡ Wishlist</span>
    <span>📦 My Orders</span>
  </div>
</div>
</>
  );
}

export default Navbar;