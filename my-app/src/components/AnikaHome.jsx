import { useState } from "react";
import "./AnikaHome.css";
import HeroImage from "../assets/HeroImage.svg";
import HeroMobile from "../assets/hero image mobile.svg";
import LogoImg from "../assets/logo.svg";

const NAV_LINKS = ["Rings", "Earrings", "Bracelets", "Bangles", "Necklaces"];

export default function AnikaHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const totalSlides = 3;

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % totalSlides);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="page">

      {/* Top stripe */}

      {/* ── Header ── */}
      <header className={`header ${menuOpen ? 'menu-open' : ''}`}>
        <div className="header-top-row">
          <button className="burger-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <div className={`burger-icon ${menuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          <div className="logo">
            <img src={LogoImg} alt="Anika" className="logo-img" />
          </div>

          <div className="header-actions">
            <button className="icon-btn search-mobile-trigger" aria-label="Search">
              <svg viewBox="0 0 20 20" fill="none" width="22" height="22">
                <circle cx="8.5" cy="8.5" r="5.5" stroke="#222" strokeWidth="1.6" />
                <path d="M13 13l3.5 3.5" stroke="#222" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
            <button className="icon-btn" aria-label="Wishlist">
              <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
                <path
                  d="M12 21C12 21 3 14.5 3 8.5A4.5 4.5 0 0 1 12 6.27 4.5 4.5 0 0 1 21 8.5C21 14.5 12 21 12 21Z"
                  stroke="#222" strokeWidth="1.6"
                />
              </svg>
            </button>
            <button className="icon-btn mobile-hide" aria-label="Account">
              <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
                <circle cx="12" cy="8" r="4" stroke="#222" strokeWidth="1.6" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#222" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="search-wrapper desktop-only">
          <svg className="search-icon" viewBox="0 0 20 20" fill="none">
            <circle cx="8.5" cy="8.5" r="5.5" stroke="#888" strokeWidth="1.6" />
            <path d="M13 13l3.5 3.5" stroke="#888" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <input className="search-input" placeholder="Search for Rings, Earrings..." />
        </div>
      </header>

      {/* ── Navbar ── */}
      <nav className={`navbar ${menuOpen ? 'mobile-open' : ''}`}>
        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              className="nav-link"
              onClick={() => {
                scrollToSection(link === 'Necklaces' ? 'necklaces' : 'categories');
                setMenuOpen(false);
              }}
            >
              {link}
            </button>
          ))}
        </div>
        <button className="services-btn">
          Services
          <svg viewBox="0 0 16 16" width="14" height="14" fill="none">
            <path d="M4 6l4 4 4-4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </nav>

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

          {/* Text content — always absolute inside the image wrapper.
              CSS repositions it: left-middle on desktop, bottom-center on mobile */}
          <div className="hero-content">
            <h1 className="hero-title">Draped in Elegance</h1>
            <p className="hero-subtitle">
              Discover handcrafted fashion jewellery for every occasion
            </p>
            <button className="explore-btn" onClick={() => scrollToSection('shop')}>
              Explore Now
            </button>
          </div>

          {/* Carousel controls */}
          <div className="carousel-controls">
            <button className="arrow-btn" onClick={prevSlide} aria-label="Previous">
              <svg viewBox="0 0 16 16" width="12" height="12" fill="none">
                <path d="M10 4L6 8l4 4" stroke="#222" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
            <div className="dots">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <span
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`dot ${i === currentSlide ? "dot-active" : ""}`}
                />
              ))}
            </div>
            <button className="arrow-btn" onClick={nextSlide} aria-label="Next">
              <svg viewBox="0 0 16 16" width="12" height="12" fill="none">
                <path d="M6 4l4 4-4 4" stroke="#222" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}