import { useState } from "react";
import "./AnikaHome.css";
import HeroImage from "../assets/HomeImage.webp";
import HeroMobile from "../assets/hero image mobile.webp";
import LogoImg from "../assets/offers/logo.svg";
import CategorySection from "./CategorySection";

const NAV_LINKS = ["Home", "Rings", "Earrings", "Bracelets", "Bangles", "Necklaces"];

export default function AnikaHome() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    if (id === 'Home') {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    
    const mapping = {
      'Rings': 'shop',
      'Earrings': 'offers',
      'Bracelets': 'shop',
      'Bangles': 'shop',
      'Necklaces': 'necklaces'
    };
    
    const targetId = mapping[id] || id.toLowerCase();
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="page">

      {/* ── Header ── */}
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

          <div className="logo">
            <img src={LogoImg} alt="Anika" className="logo-img" />
          </div>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                className={`nav-link ${link === 'Home' ? 'active' : ''}`}
                onClick={() => scrollToSection(link)}
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
              onClick={() => {
                scrollToSection(link);
                setMenuOpen(false);
              }}
            >
              {link}
            </button>
          ))}
        </nav>
      </div>

      {/* ── Mobile Category Row (Above Hero) ── */}
      <div className="mobile-top-categories mobile-only">
        <CategorySection onCategoryClick={(name) => scrollToSection(name)} />
      </div>

      {/* ── Hero ── */}
      <section className="hero-section">
        <div className="hero-image-wrapper">
          {/* Background image */}
          <picture>
            <source media="(max-width: 768px)" srcSet={HeroMobile} />
            <img
              src={HeroImage}
              alt="Jewellery hero"
              className="hero-image"
              fetchPriority="high"
            />
          </picture>

          {/* Dark gradient overlay — covers bottom half on mobile, left strip on desktop */}
          <div className="hero-overlay" />

          {/* Text content — absolute inside the image wrapper */}
          <div className="hero-content">
            <h1 className="hero-title">Draped in Elegance</h1>
            <p className="hero-subtitle">
              Discover handcrafted fashion jewellery for every occasion
            </p>
            <button className="explore-btn" onClick={() => scrollToSection('shop')}>
              Explore Now
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}