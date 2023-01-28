import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      const oldItem = state.items.find((item) => item.id === payload.id);
      if (oldItem) {
        oldItem.count++;
        state.totalPrice += payload.price;
      } else {
        state.items.push(payload);
        state.totalPrice += payload.price;
      }
    },
    countPlus: (state, { payload }) => {
      const oldItem = state.items.find((item) => item.id === payload.id);
      oldItem.count++;
      state.totalPrice += payload.price;
    },
    countMinus: (state, { payload }) => {
      const oldItem = state.items.find((item) => item.id === payload.id);
      if (oldItem.count > 1) {
        oldItem.count--;
        state.totalPrice -= payload.price;
      }
    },
    deleteItem: (state, { payload }) => {
      state.items = state.items.filter((item) => item.id !== payload.id);
      state.totalPrice -= payload.price * payload.count;
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, deleteItem, clearCart, countPlus, countMinus } = cartSlice.actions;

export default cartSlice.reducer;
