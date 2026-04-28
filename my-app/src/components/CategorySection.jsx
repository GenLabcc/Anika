import './CategorySection.css';

import Rings from '../assets/Rings1.svg';
import Earrings from '../assets/Earrings.svg';
import Bracelets1 from '../assets/Bracelets1.svg';
import Bangles from '../assets/Bangles.svg';
import Necklaces from '../assets/Necklaces.svg';

export default function CategorySection() {
  return (
    <section className="category-section">
      <div className="category-wrapper">

        <div className="category-item">
          <img src={Rings} alt="Rings" loading="lazy" decoding="async" />
          <p>Rings</p>
        </div>

        <div className="category-item">
          <img src={Earrings} alt="Earrings" loading="lazy" decoding="async" />
          <p>Earrings</p>
        </div>

        <div className="category-item">
          <img src={Bracelets1} alt="Bracelets1" loading="lazy" decoding="async" />
          <p>Bracelets</p>
        </div>

        <div className="category-item">
          <img src={Bangles} alt="Bangles" loading="lazy" decoding="async" />
          <p>Bangles</p>
        </div>

        <div className="category-item">
          <img src={Necklaces} alt="Necklaces" loading="lazy" decoding="async" />
          <p>Necklaces</p>
        </div>

      </div>
    </section>
  );
}