import React from 'react';
import { useSelector } from 'react-redux';

function Navbar({ onNavigate }) {
  const items = useSelector((state) => state.cart.items);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="nav-brand" onClick={() => onNavigate('home')}>
        🌿 Paradise Nursery
      </div>
      <div className="nav-links">
        <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Home</a>
        <a href="#plants" onClick={(e) => { e.preventDefault(); onNavigate('plants'); }}>Plants</a>
        <a href="#cart" className="cart-link" onClick={(e) => { e.preventDefault(); onNavigate('cart'); }}>
          🛒 Cart <span className="cart-count">{totalItems}</span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
