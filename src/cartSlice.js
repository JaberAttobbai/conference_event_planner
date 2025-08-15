import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalItems: 0,
    totalCost: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const { name, cost, image } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          name,
          cost,
          image,
          quantity: 1,
        });
      }
      
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalCost = state.items.reduce((total, item) => {
        const costValue = parseFloat(item.cost.substring(1));
        return total + (costValue * item.quantity);
      }, 0);
    },
    
    removeItem: (state, action) => {
      const name = action.payload;
      state.items = state.items.filter(item => item.name !== name);
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalCost = state.items.reduce((total, item) => {
        const costValue = parseFloat(item.cost.substring(1));
        return total + (costValue * item.quantity);
      }, 0);
    },
    
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find(item => item.name === name);
      
      if (item) {
        if (quantity <= 0) {
          state.items = state.items.filter(item => item.name !== name);
        } else {
          item.quantity = quantity;
        }
      }
      
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalCost = state.items.reduce((total, item) => {
        const costValue = parseFloat(item.cost.substring(1));
        return total + (costValue * item.quantity);
      }, 0);
    },
    
    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalCost = 0;
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer; 