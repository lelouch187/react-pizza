const { createAsyncThunk, createSlice } = require('@reduxjs/toolkit');
const { PostServices } = require('../../API/PostServices');

export const fetchPizzas = createAsyncThunk(
  'users/fetchPizzas',
  async (args) => {
    const data = await PostServices.getAll(...args);
    return data;
  },
);
const initialState = {
  pizzas: [],
  status: 'pending',
};
const PizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.pizzas = [];
      state.status = 'pending';
    });
    builder.addCase(fetchPizzas.fulfilled, (state, { payload }) => {
      state.pizzas = payload;
      state.status = 'fulfilled';
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.pizzas = [];
      state.status = 'error';
    });
  },
});

export const selectPizzasData = state=>state.pizzas
export default PizzasSlice.reducer;
