// src/components/Footer.js
import React from 'react';
import './css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} AWE_CODE. All rights reserved. </p>
        <div className="footer-contact">
          <p><a href="mailto:awecodeme@gmail.com">awecodeme@gmail.com</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;