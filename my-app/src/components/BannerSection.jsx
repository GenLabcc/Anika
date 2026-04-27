import './BannerSection.css';
 
// Import your Figma images
// These images already have text baked in from Figma — DO NOT add overlay text here
import FestiveImg from '../assets/FestiveEdit.svg';
import BraceletImg from '../assets/Bracelets.svg';
import RingsImg from '../assets/Rings.svg';
 
export default function BannerSection() {
  return (
    <section className="banner-section">
 
      {/* Left: Large Festive Edit — image already has text inside */}
      <div className="banner-card banner-large">
        <img src={FestiveImg} alt="Shop Festive Edit" className="banner-img" loading="lazy" />
        {/* NO overlay text here — text is already in the Figma image */}
      </div>
 
      {/* Right: Two stacked banners */}
      <div className="banner-stack">
 
        {/* Bracelets — image already has text inside */}
        <div className="banner-card banner-half">
          <img src={BraceletImg} alt="Shop Bracelets" className="banner-img" loading="lazy" />
          {/* NO overlay text here — text is already in the Figma image */}
        </div>
 
        {/* Rings — image already has text inside */}
        <div className="banner-card banner-half">
          <img src={RingsImg} alt="Explore Rings" className="banner-img" loading="lazy" />
          {/* NO overlay text here — text is already in the Figma image */}
        </div>
 
      </div>
    </section>
  );
}