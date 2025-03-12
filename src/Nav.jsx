import React, { useState } from 'react';
import { FaRegHeart,FaShoppingCart  } from "react-icons/fa";
import './nav.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="/">Label Badhra</a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="/men">MEN</a></li>
            <li><a href="/women">WOMEN</a></li>
            <li><a href="/kids">KIDS</a></li>
            <li><a><FaRegHeart/></a></li>
            <li><a><FaShoppingCart/> </a></li>
          </ul>
        </div>

        {/* Search Bar and Login Button */}
        <div className="navbar-actions">
          <input type="text" placeholder="Search by products" className="search-bar" />
          <button className="login-button">LOGIN</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;