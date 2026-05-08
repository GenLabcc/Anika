import React, { useState } from "react";
import "./SiteHeader.css";
import LogoImg from "../assets/offers/logo.svg";

const NAV_LINKS = ["Home", "Rings", "Earrings", "Bracelets", "Bangles", "Necklaces"];

export default function SiteHeader({ activeLink = "Home", onLinkClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (link) => {
    setMenuOpen(false);
    if (onLinkClick) {
      onLinkClick(link);
    }
  };

  return (
    <>
      <header className={`header ${menuOpen ? 'menu-open' : ''}`}>
        <div className="header-top-row">
          {/* Burger (Mobile only) */}
          <button className="burger-btn mobile-only" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <div className={`burger-icon ${menuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          <div className="logo" onClick={() => handleLinkClick('Home')} style={{ cursor: 'pointer' }}>
            <img src={LogoImg} alt="Anika" className="logo-img" />
          </div>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                className={`nav-link ${link === activeLink ? 'active' : ''}`}
                onClick={() => handleLinkClick(link)}
              >
                {link}
              </button>
            ))}
          </nav>

          <div className="header-actions">
            <button className="icon-btn" aria-label="Search">
              <svg viewBox="0 0 20 20" fill="none" width="22" height="22">
                <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.6" />
                <path d="M13 13l3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
            <button className="icon-btn" aria-label="Wishlist">
              <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
                <path
                  d="M12 21C12 21 3 14.5 3 8.5A4.5 4.5 0 0 1 12 6.27 4.5 4.5 0 0 1 21 8.5C21 14.5 12 21 12 21Z"
                  stroke="currentColor" strokeWidth="1.6"
                />
              </svg>
            </button>
            <button className="icon-btn" aria-label="Account">
              <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              className="mobile-nav-link"
              onClick={() => handleLinkClick(link)}
            >
              {link}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}
