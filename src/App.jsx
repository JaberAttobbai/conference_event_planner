import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Header from "./Header";
import LandingPage from "./LandingPage";
import ProductListing from "./ProductListing";
import ShoppingCart from "./ShoppingCart";

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const handleGetStarted = () => {
    setCurrentPage('products');
  };

  const handleContinueShopping = () => {
    setCurrentPage('products');
  };

  const handleCheckout = () => {
    alert('Thank you for your purchase! This is a demo application.');
    setCurrentPage('landing');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onGetStarted={handleGetStarted} />;
      case 'products':
        return <ProductListing />;
      case 'cart':
        return (
          <ShoppingCart 
            onContinueShopping={handleContinueShopping}
            onCheckout={handleCheckout}
          />
        );
      default:
        return <LandingPage onGetStarted={handleGetStarted} />;
    }
  };

  return (
    <Provider store={store}>
      <div className="app">
        {currentPage !== 'landing' && (
          <Header currentPage={currentPage} onNavigate={handleNavigate} />
        )}
        <main className="main-content">
          {renderPage()}
        </main>
      </div>
    </Provider>
  );
}

export default App;
