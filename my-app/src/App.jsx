import React, { useState } from 'react';
import HomePage from './components/HomePage';
import ProductDetails from './components/ProductDetails';
 
function App() {
  const [view, setView] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setView('product-details');
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {view === 'home' ? (
        <HomePage onProductClick={handleProductClick} />
      ) : (
        <ProductDetails 
          product={selectedProduct} 
          onBack={() => setView('home')} 
          onProductSelect={handleProductClick}
        />
      )}
    </div>
  );
}
 
export default App;