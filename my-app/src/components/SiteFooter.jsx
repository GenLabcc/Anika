import React from 'react';
import './SiteFooter.css';
import LogoImg from "../assets/logo.svg";

// Social icons from the project assets
import WhatsappIcon from '../assets/footer/whatsapp.svg';
import InstagramIcon from '../assets/footer/instagram.svg';
import FacebookIcon from '../assets/footer/facebook.svg';

const SiteFooter = () => {
  return (
    <footer className="footer-parent">
      <div className="footer-container">
        <div className="footer-grid">
          
          {/* Column 1: Logo, Newsletter, Socials */}
          <div className="footer-column brand-column">
            <div className="footer-logo">
              <img src={LogoImg} alt="ANIKA" className="logo-img" />
            </div>
            
            <div className="newsletter-section">
              <p className="footer-label">Subscribe to Newsletter</p>
              <div className="pill-input-group">
                <input type="email" placeholder="Email Address" className="pill-email-input" />
                <button className="pill-submit-btn">Submit</button>
              </div>
            </div>

            <div className="socials-section">
              <p className="footer-label">Find Us On</p>
              <div className="social-box-links">
                <a href="/" className="social-box-icon" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="/" className="social-box-icon" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="/" className="social-box-icon" aria-label="WhatsApp">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-7.6 8.38 8.38 0 0 1 3.8.9L21 3.5z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Discover */}
          <div className="footer-column">
            <h3 className="section-title">Discover</h3>
            <ul className="footer-list">
              <li><a href="/" className="footer-link">Rings & Collections</a></li>
              <li><a href="/" className="footer-link">Wedding Jewellery</a></li>
              <li><a href="/" className="footer-link">Necklaces</a></li>
              <li><a href="/" className="footer-link">Special Services</a></li>
            </ul>
          </div>

          {/* Column 3: Help */}
          <div className="footer-column">
            <h3 className="section-title">Help</h3>
            <ul className="footer-list">
              <li><a href="/" className="footer-link">Payments</a></li>
              <li><a href="/" className="footer-link">Shipping</a></li>
              <li><a href="/" className="footer-link">Cancellations & Returns</a></li>
              <li><a href="/" className="footer-link">FAQ</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="footer-column">
            <h3 className="section-title">Contact Us</h3>
            <div className="contact-content">
              <p className="address-text">
                121A, Kottar-Parvathipuram Rd, Chetti Kulam,<br />
                Simon Nagar, Nagercoil, Tamil Nadu 629001
              </p>
              <p className="phone-text">+91 93636 31636</p>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="bottom-content">
            <p className="copyright-text">© 2025 Anika Jewellery · All rights reserved.</p>
            <div className="legal-links">
              <a href="/">Privacy Policy</a>
              <span className="dot-sep">·</span>
              <a href="/">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
