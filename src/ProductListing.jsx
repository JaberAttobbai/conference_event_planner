import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './cartSlice';
import { plantData, categories } from './plantData';
import './ProductListing.css';

const ProductListing = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const filteredPlants = selectedCategory === 'All' 
    ? plantData 
    : plantData.filter(plant => plant.category === selectedCategory);

  const handleAddToCart = (plant) => {
    dispatch(addItem({
      name: plant.name,
      cost: plant.cost,
      image: plant.image
    }));
    
    // Update local state to reflect product has been added to cart
    setAddedToCart(prev => ({
      ...prev,
      [plant.name]: true
    }));
  };

  return (
    <div className="product-listing">
      <div className="category-filter">
        <h2>Browse Our Plants</h2>
        <div className="category-buttons">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="products-grid">
        {filteredPlants.map(plant => (
          <div key={plant.id} className="product-card">
            <div className="product-image">
              <img src={plant.image} alt={plant.name} />
            </div>
            <div className="product-info">
              <h3 className="plant-name">{plant.name}</h3>
              <p className="plant-description">{plant.description}</p>
              <p className="plant-category">{plant.category}</p>
              <p className="plant-price">{plant.cost}</p>
              <button 
                className={`add-to-cart-btn ${addedToCart[plant.name] ? 'added' : ''}`}
                onClick={() => handleAddToCart(plant)}
                disabled={addedToCart[plant.name]}
              >
                {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing; 