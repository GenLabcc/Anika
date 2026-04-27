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
  <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888' }}>
    Loading Section...
  </div>
);

export default function HomePage() {
  return (
    <div className="homepage">
      {/* Above the fold - loads immediately */}
      <AnikaHome />

      {/* Below the fold - lazy loaded */}
      <Suspense fallback={<SectionLoader />}>
        <div id="shop"><ProductSection /></div>
        <BannerSection />
        <div id="categories"><CategorySection /></div>
        <CollectionsSection />
        <div id="necklaces"><NecklaceShowcase /></div>
        <RealExperience />
        <Offers />
        <div id="reviews"><CustomerExperiences /></div>
        <SiteFooter />
      </Suspense>
    </div>
  );
}