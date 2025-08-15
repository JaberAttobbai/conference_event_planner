import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './cartSlice';
import './ShoppingCart.css';

const ShoppingCart = ({ onContinueShopping, onCheckout }) => {
  const { items, totalItems, totalCost } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const calculateTotalCost = (item) => {
    const costValue = parseFloat(item.cost.substring(1));
    return (costValue * item.quantity).toFixed(2);
  };

  const handleContinueShopping = (e) => {
    onContinueShopping(e);
  };

  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };

  if (items.length === 0) {
    return (
      <div className="shopping-cart empty-cart">
        <h2>Your Cart is Empty</h2>
        <p>Add some beautiful plants to get started!</p>
        <button className="continue-shopping-btn" onClick={handleContinueShopping}>
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="shopping-cart">
      <div className="cart-header">
        <h2>Shopping Cart</h2>
        <div className="cart-summary">
          <p>Total Items: {totalItems}</p>
          <p className="total-cost">Total Cost: ${totalCost.toFixed(2)}</p>
        </div>
      </div>

      <div className="cart-items">
        {items.map(item => (
          <div key={item.name} className="cart-item">
            <div className="item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="item-details">
              <h3 className="item-name">{item.name}</h3>
              <p className="item-price">{item.cost} each</p>
              <p className="item-total">Total: ${calculateTotalCost(item)}</p>
            </div>
            <div className="item-controls">
              <div className="quantity-controls">
                <button 
                  className="quantity-btn"
                  onClick={() => handleDecrement(item)}
                >
                  -
                </button>
                <span className="quantity">{item.quantity}</span>
                <button 
                  className="quantity-btn"
                  onClick={() => handleIncrement(item)}
                >
                  +
                </button>
              </div>
              <button 
                className="remove-btn"
                onClick={() => handleRemove(item)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-actions">
        <button className="continue-shopping-btn" onClick={handleContinueShopping}>
          Continue Shopping
        </button>
        <button className="checkout-btn" onClick={handleCheckoutShopping}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart; 