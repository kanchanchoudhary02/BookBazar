import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser, FaBookOpen } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import LoginModal from "./LoginModal";
// Import add karo upar
import CartDrawer from './CartDrawer';

// State add karo


function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const { user, logout, cart } = useAuth();

  return (
    <>
      <header className="navbar">
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

            {/* Cart */}
            <button
  className="icon-btn cart-btn"
  onClick={() => setShowCart(true)}
  aria-label="Cart"
>
  <FaShoppingCart />
  {cart.length > 0 && (
    <span className="cart-count">{cart.length}</span>
  )}
</button>

            {/* Login / User */}
            {user ? (
              <button className="login-btn" onClick={logout}>
                <FaUser />
                <span>{user.name.split(' ')[0]}</span>
              </button>
            ) : (
              <button
                className="login-btn"
                onClick={() => setShowLogin(true)}
              >
                <FaUser />
                <span>Login</span>
              </button>
            )}

          </div>
        </div>

        {/* Menu Bar */}
        <nav className="menu-bar">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/books">Books</NavLink>
          <NavLink to="/notes">Notes</NavLink>
          <NavLink to="/marketplace">Marketplace</NavLink>
          <NavLink to="/sell">Sell</NavLink>
        </nav>
      </header>

      {/* Login Modal */}
      {showLogin && (
        <LoginModal onClose={() => setShowLogin(false)} />
      )}
      {showCart && (
  <CartDrawer onClose={() => setShowCart(false)} />
)}
    </>
  );
}

export default Navbar;