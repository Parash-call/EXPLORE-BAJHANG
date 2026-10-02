import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h4>Explore Bajhang</h4>
          <p style={{ lineHeight: '1.6' }}>
            Discover the natural beauty, rich culture, and warm hospitality
            of Bajhang District in Far-Western Nepal.
          </p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <Link to="/destinations">Destinations</Link>
          <Link to="/routes">Trekking Routes</Link>
          <Link to="/culture">Culture & Festivals</Link>
          <Link to="/hotels">Hotels & Homestays</Link>
          <Link to="/guides">Local Guides</Link>
          <Link to="/facilities">Facilities</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Bajhang District, Sudurpashchim Province</p>
          <p>Nepal</p>
          <p style={{ marginTop: '10px' }}>info@explorebajhang.com</p>
          <p>+977-984-1234567</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>2026 Explore Bajhang. All rights reserved.</p>
        <p>Developed by Parash daulyal</p>
      </div>
    </footer>
  );
}

export default Footer;
