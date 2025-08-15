import React from 'react';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import './Header.css';

const Header = ({ currentPage, onNavigate }) => {
  const { totalItems } = useSelector((state) => state.cart);

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">Paradise Nursery</h1>
        <nav className="nav">
          {currentPage !== 'landing' && (
            <button 
              className="nav-btn" 
              onClick={() => onNavigate('landing')}
            >
              Home
            </button>
          )}
          {currentPage !== 'products' && (
            <button 
              className="nav-btn" 
              onClick={() => onNavigate('products')}
            >
              Plants
            </button>
          )}
          {currentPage !== 'cart' && (
            <button 
              className="nav-btn cart-btn" 
              onClick={() => onNavigate('cart')}
            >
              <FaShoppingCart />
              <span className="cart-count">{totalItems}</span>
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header; 