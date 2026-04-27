import React, { useState } from 'react';
import './SiteFooter.css';

// Icons for social media (placeholders, assuming they exist or using text)
import WhatsappIcon from '../assets/footer/whatsapp.svg';
import InstagramIcon from '../assets/footer/instagram.svg';
import FacebookIcon from '../assets/footer/facebook.svg';

const SiteFooter = () => {
  // Mobile accordion state
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    if (window.innerWidth <= 768) {
      setActiveSection(activeSection === section ? null : section);
    }
  };

  return (
    <footer className="footer-parent">
      <div className="footer-container">
        <div className="footer-grid">
          
          {/* Newsletter Section */}
          <div className="footer-column stay-inspired">
            <h3 className="section-title">Stay Inspired</h3>
            <div className="newsletter-box">
              <div className="input-group">
                <input type="email" placeholder="Enter your email" className="email-input" />
                <button className="subscribe-btn">Submit</button>
              </div>
              <p className="newsletter-text">
                Be the first to know about our new collections, exclusive offers, and styling tips.
              </p>
            </div>
          </div>

          {/* Customer Service Accordion */}
          <div className={`footer-column ${activeSection === 'service' ? 'active' : ''}`}>
            <h3 className="section-title accordion-header" onClick={() => toggleSection('service')}>
              Customer Service
              <span className="accordion-icon">+</span>
            </h3>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Track Your Order</a></li>
              <li><a href="#" className="footer-link">Returns & Exchanges</a></li>
              <li><a href="#" className="footer-link">Shipping Policy</a></li>
              <li><a href="#" className="footer-link">Quality Assurance</a></li>
              <li><a href="#" className="footer-link">FAQs</a></li>
            </ul>
          </div>

          {/* Quick Links Accordion */}
          <div className={`footer-column ${activeSection === 'links' ? 'active' : ''}`}>
            <h3 className="section-title accordion-header" onClick={() => toggleSection('links')}>
              Quick Links
              <span className="accordion-icon">+</span>
            </h3>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">About ANIKA</a></li>
              <li><a href="#" className="footer-link">Gift Cards</a></li>
              <li><a href="#" className="footer-link">Store Locator</a></li>
              <li><a href="#" className="footer-link">Reviews</a></li>
              <li><a href="#" className="footer-link">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className={`footer-column contact-info ${activeSection === 'contact' ? 'active' : ''}`}>
            <h3 className="section-title accordion-header" onClick={() => toggleSection('contact')}>
              Contact Us
              <span className="accordion-icon">+</span>
            </h3>
            <div className="contact-content">
              <p className="address">
                123 Luxury Lane, Jewellery District<br />
                Mumbai, Maharashtra - 400001
              </p>
              <p className="phone">+91 98765 43210</p>
              <div className="social-links">
                <a href="#" className="social-icon"><img src={WhatsappIcon} alt="WhatsApp" /></a>
                <a href="#" className="social-icon"><img src={InstagramIcon} alt="Instagram" /></a>
                <a href="#" className="social-icon"><img src={FacebookIcon} alt="Facebook" /></a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="bottom-content">
            <p className="copyright">© 2024 ANIKA Luxury Jewellery. All rights reserved.</p>
            <div className="legal-links">
              <a href="#">Privacy Policy</a>
              <span className="separator">|</span>
              <a href="#">Terms of Service</a>
              <span className="separator">|</span>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
