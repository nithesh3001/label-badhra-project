import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <h1 className='foot-head'>LABEL BADHRA</h1>
      <div className="footer-content">
        <div className="content-1">
          <h2>CUSTOMER SERVICE</h2>
          <p>Contact Us</p>
          <p>Track Order</p>
          <p>Return Order</p>
          <p>Cancel Order</p>
        </div>
        <div className="content-2">
          <h2>COMPANY</h2>
          <p>About Us</p>
          <p>Terms & Conditions</p>
          <p>Privacy Poilcy</p>
          <p>We Are Hiring</p>
        </div>
        <div className="content-3">
          <h2>CONNECT WITH US</h2>
          <p><FaFacebookSquare />    0.7M peoplelike this</p>
          <p><FaInstagramSquare />   1M peoples</p>
          <div className="icon-foot">
            <FaTwitter />
            <FaPinterest />
            <FaSnapchatGhost />
            <FaApple />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;