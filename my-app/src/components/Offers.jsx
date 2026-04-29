import React from 'react';
import './Offers.css';
import FestiveImg from '../assets/offers/image-5.svg';
import Product1 from '../assets/offers/image-1.svg';
import Product2 from '../assets/offers/image-2.svg';
import Product3 from '../assets/offers/image-3.svg';
import Product4 from '../assets/offers/image-4.svg';
import Product5 from '../assets/offers/image-6.svg';

const Offers = () => {
  const products = [
    { id: 1, img: Product1, name: 'Rings' },
    { id: 2, img: Product2, name: 'Earrings' },
    { id: 3, img: Product3, name: 'Bracelets' },
    { id: 4, img: Product4, name: 'Bangles' },
    { id: 5, img: Product5, name: 'Necklaces' },
  ];

  return (
    <section className="offer-section">
      <div className="offer-container">
        {/* Main large image - using FestiveEdit */}
        <div className="offer-main-image">
          <img src={FestiveImg} alt="Special Offer" className="main-img" loading="lazy" decoding="async" />
          <div className="lifestyle-overlay">
            <h2 className="lifestyle-title">Earrings</h2>
            <p className="lifestyle-subtitle">Frame Your Face</p>
          </div>
        </div>

        {/* Product carousel side */}
        <div className="offer-content">
          <div className="offer-products-grid">
            {products.map((p) => (
              <div key={p.id} className="offer-card" data-label={p.name}>
                <div className="offer-img-wrapper">
                  <img src={p.img} alt={p.name} className="offer-product-img" loading="lazy" />
                </div>
                <div className="offer-details">
                  <div className="offer-card-info">
                    <div className="price-tag">
                      <span className="discount-price">₹7,840</span>
                      <span className="original-price">₹9,800</span>
                    </div>
                    <p className="product-name">Glamore Earrings ...</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="offer-footer">
            <div className="carousel-pagination">
              <button className="nav-btn prev" aria-label="Previous">
                <div className="arrow left" />
              </button>
              <div className="dots-indicator">
                <span className="dot active"></span>
                <span className="dot"></span>
              </div>
              <button className="nav-btn next" aria-label="Next">
                <div className="arrow right" />
              </button>
            </div>
            <button className="offers-shop-btn">Shop Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
