import React from 'react';
import './LandingPage.css';

const LandingPage = ({ onGetStarted }) => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <div className="landing-text">
          <h1 className="company-name">Paradise Nursery</h1>
          <p className="company-description">
            Welcome to Paradise Nursery, your premier destination for beautiful houseplants 
            that bring life and tranquility to your home. We specialize in carefully curated 
            tropical plants, low-maintenance varieties, and stunning flowering specimens. 
            Each plant is selected for its beauty, health, and ability to thrive in your 
            living space. Whether you're a seasoned plant parent or just beginning your 
            green journey, we have the perfect plants to transform your home into a 
            lush, vibrant paradise.
          </p>
          <button className="get-started-btn" onClick={onGetStarted}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 