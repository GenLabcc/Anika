// RealExperience.jsx
import React from 'react';
import './RealExperience.css';
import Ig1 from '../assets/ig/Frame 2147225711.svg';
import Ig2 from '../assets/ig/Frame 2147225712.svg';
import Ig3 from '../assets/ig/Frame 2147225713.svg';
import Ig4 from '../assets/ig/Frame 2147225714.svg';

const RealExperience = () => {
  const link = "https://www.instagram.com/reel/DR1rsagCFF3/?igsh=NG12eWZpNTFzc2k%3D";
  
  // Duplicating the set for a seamless infinite loop
  const images = [Ig1, Ig2, Ig3, Ig4, Ig1, Ig2, Ig3, Ig4];

  return (
    <div className="textParent">
      <div className="text">
        <div className="realExperiences">Real Experiences</div>
        <div className="hearFromOur">
          Hear from our happy customers who've experienced our world-magic.
        </div>
      </div>
      
      <div className="experience-scroll-container">
        <div className="experience-track">
          {images.map((img, index) => (
            <a 
              key={index} 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="experience-item"
            >
              <img src={img} className="frameChild" alt={`Customer experience ${index + 1}`} loading="lazy" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RealExperience;