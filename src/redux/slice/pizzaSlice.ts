import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PostServices } from '../../API/PostServices';
import { RootState } from '../store';

export type Pizza = {
  id: string;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
};
type PizzaArgs = [
  sort: string,
  categ: number,
  currentPage: number,
];
enum PizzaStatus {
  PENDING = 'pending',
  FULFILED = 'fulfilled',
  ERROR = 'error',
}
export interface PizzaState {
  pizzas: Pizza[];
  status: PizzaStatus;
}

export const fetchPizzas = createAsyncThunk('users/fetchPizzas', async (args: PizzaArgs) => {
  const data = (await PostServices.getAll(...args)) as Pizza[];
  return data;
});
const initialState: PizzaState = {
  pizzas: [],
  status: PizzaStatus.PENDING,
};
const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.pizzas = [];
      state.status = PizzaStatus.PENDING;
    });
    builder.addCase(fetchPizzas.fulfilled, (state, { payload }) => {
      state.pizzas = payload;
      state.status = PizzaStatus.FULFILED;
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.pizzas = [];
      state.status = PizzaStatus.ERROR;
    });
  },
});

export const selectPizzasData = (state:RootState)=>state.pizzas
export default pizzasSlice.reducer;
