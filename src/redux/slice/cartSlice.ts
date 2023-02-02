import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type CartPizza = {
  id:string;
  title:string;
  count:number;
  imageUrl:string;
  price:number;
  type: string;
  size: number;
}

interface CartState {
  items:CartPizza[];
  totalPrice:number;
}

const initialState:CartState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, { payload }:PayloadAction<CartPizza>) => {
      const oldItem = state.items.find((item) => item.id === payload.id);
      if (oldItem) {
        oldItem.count++;
        state.totalPrice += payload.price;
      } else {
        state.items.push(payload);
        state.totalPrice += payload.price;
      }
    },
    countPlus: (state, { payload }:PayloadAction<CartPizza>) => {
      const oldItem = state.items.find((item) => item.id === payload.id) as CartPizza;
      oldItem.count++;
      state.totalPrice += payload.price;
    },
    countMinus: (state, { payload }) => {
      const oldItem= state.items.find((item) => item.id === payload.id) as CartPizza;
      if (oldItem.count > 1) {
        oldItem.count--;
        state.totalPrice -= payload.price;
      }
    },
    deleteItem: (state, { payload }:PayloadAction<CartPizza>) => {
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
export const selectCart = (state:RootState)=>state.cart 
export const selectItemById = (id:string)=>(state:RootState)=>state.cart.items.find(item=>item.id===id)
export default cartSlice.reducer;
