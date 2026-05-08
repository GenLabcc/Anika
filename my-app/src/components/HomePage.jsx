import React, { Suspense, lazy } from 'react';
import AnikaHome from './AnikaHome';
import './HomePage.css';

// Lazy load components that are below the fold to improve initial speed
const ProductSection = lazy(() => import('./ProductSection'));
const BannerSection = lazy(() => import('./BannerSection'));
const CategorySection = lazy(() => import('./CategorySection'));
const CollectionsSection = lazy(() => import('./CollectionsSection'));
const NecklaceShowcase = lazy(() => import('./NecklaceShowcase'));
const RealExperience = lazy(() => import('./RealExperience'));
const Offers = lazy(() => import('./Offers'));
const CustomerExperiences = lazy(() => import('./CustomerExperiences'));
const SiteFooter = lazy(() => import('./SiteFooter'));

// Loading placeholder for lazy components
const SectionLoader = () => (
  <div style={{ height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  </div>
);

export default function HomePage({ onProductClick }) {
  const handleCategoryClick = (name) => {
    let sectionId = '';
    
    if (name === 'Necklaces') {
      sectionId = 'necklaces';
    } else if (name === 'Bangles') {
      sectionId = 'shop';
    } else if (name === 'Earrings') {
      sectionId = 'offers';
    } else {
      // Rings and Bracelets - do nothing
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="homepage">
      {/* Above the fold - loads immediately */}
      <AnikaHome />

      {/* Below the fold - lazy loaded */}
      <Suspense fallback={<SectionLoader />}>
        <div id="shop"><ProductSection onProductClick={onProductClick} /></div>
        <BannerSection />
        <div id="categories" className="desktop-only">
          <CategorySection onCategoryClick={handleCategoryClick} />
        </div>
        <CollectionsSection />
        <div id="necklaces"><NecklaceShowcase /></div>
        <RealExperience />
        <div id="offers"><Offers onProductClick={onProductClick} /></div>
        <div id="reviews"><CustomerExperiences /></div>
        <SiteFooter />
      </Suspense>
    </div>
  );
}