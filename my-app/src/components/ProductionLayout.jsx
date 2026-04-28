import React from 'react';
import './ProductionLayout.css';
import HeroImage from './assets/HeroImage.svg';
import HeroMobile from './assets/hero image mobile.svg';
import LogoImg from './assets/logo.svg';

// Import images for sections
import RingHandImg from './assets/RingHand.svg';
import Product1 from './assets/Product1.svg';
import Product2 from './assets/Product2.svg';
import Product3 from './assets/Product3.svg';

export default function ProductionLayout() {
  return (
    <div className="anika-root">
      <header className="site-header">
        <div className="container header-content">
          <img src={LogoImg} alt="Anika Logo" className="logo" />
          <nav className="main-nav">
            <ul className="nav-list">
              <li><a href="#shop" className="nav-link">Shop</a></li>
              <li><a href="#categories" className="nav-link">Categories</a></li>
              <li><a href="#reviews" className="nav-link">Reviews</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <picture className="hero-picture">
            <source media="(max-width: 48rem)" srcSet={HeroMobile} />
            <img src={HeroImage} alt="Jewellery hero" className="hero-img" />
          </picture>
          <div className="hero-overlay">
            <div className="container hero-text">
              <h1 className="hero-title">Draped in Elegance</h1>
              <p className="hero-subtitle">Discover handcrafted fashion jewellery for every occasion</p>
              <a href="#shop" className="btn btn-primary">Explore Now</a>
            </div>
          </div>
        </section>

        <section id="shop" className="product-showcase">
          <div className="container">
            <header className="section-header">
              <h2 className="section-title">New Arrivals</h2>
              <p className="section-subtitle">Exquisite pieces designed for modern traditions.</p>
            </header>
            
            <div className="product-grid">
              <div className="lifestyle-card">
                <img src={RingHandImg} alt="Lifestyle" className="img-resp" />
              </div>
              
              <div className="items-grid">
                {[Product1, Product2, Product3].map((img, i) => (
                  <article key={i} className="product-card">
                    <div className="product-img-box">
                      <img src={img} alt="Jewellery" className="img-resp" loading="lazy" decoding="async" />
                    </div>
                    <div className="product-body">
                      <h3 className="product-name">Glamore Necklace Set</h3>
                      <div className="product-price">
                        <span className="price-curr">₹7,840</span>
                        <span className="price-old">₹9,800</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img src={LogoImg} alt="Anika" className="logo-white" />
            <p className="footer-desc">Premium handcrafted jewellery for the modern woman. Celebrate every tradition with Anika's curated collections.</p>
          </div>
          <div className="footer-links">
            <h4 className="footer-heading">Shop</h4>
            <ul className="footer-list">
              <li><a href="/">Necklaces</a></li>
              <li><a href="/">Earrings</a></li>
              <li><a href="/">Rings</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4 className="footer-heading">Help</h4>
            <ul className="footer-list">
              <li><a href="/">Shipping Policy</a></li>
              <li><a href="/">Returns & Exchanges</a></li>
              <li><a href="/">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>&copy; 2024 Anika Jewellery. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
