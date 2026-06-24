import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">📚 Study Bazar</div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/marketplace">Marketplace</Link></li>
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/notes">Notes</Link></li>
        <li><Link to="/pyqs">PYQs</Link></li>
        <li><Link to="/sell">Sell</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;