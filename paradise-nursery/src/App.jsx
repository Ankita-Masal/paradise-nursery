import React, { useState } from 'react';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';
import AboutUs from './AboutUs.jsx';
import './App.css';

function App() {
  // view can be: 'home' | 'plants' | 'cart'
  const [view, setView] = useState('home');

  return (
    <div className="app">
      {view === 'home' && (
        <div className="landing-page">
          <div className="landing-content">
            <div className="landing-overlay">
              <h1>Welcome To Paradise Nursery</h1>
              <div className="divider"></div>
              <p className="tagline">Where Green Meets Serenity</p>
              <button className="get-started-button" onClick={() => setView('plants')}>
                Get Started
              </button>
            </div>
            <div className="about-us-container">
              <AboutUs />
            </div>
          </div>
        </div>
      )}

      {view === 'plants' && <ProductList onNavigate={setView} />}

      {view === 'cart' && <CartItem onNavigate={setView} />}
    </div>
  );
}

export default App;
