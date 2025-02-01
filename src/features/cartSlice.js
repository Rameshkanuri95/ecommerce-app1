// features/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      items: [],
      total: 0,
    },
    reducers: {
      addToCart: (state, action) => {
        const item = action.payload;
        const existingItem = state.items.find((i) => i.id === item.id);
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          state.items.push({ ...item, quantity: 1 });
        }
        state.total += item.price;
      },
      removeFromCart: (state, action) => {
        const itemId = action.payload;
        const item = state.items.find((i) => i.id === itemId);
        if (item) {
          state.total -= item.price * item.quantity;
          state.items = state.items.filter((i) => i.id !== itemId);
        }
      },
      clearCart: (state) => {
        state.items = [];
        state.total = 0;
      },
    },
  });
  
  export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
  export default cartSlice.reducer;