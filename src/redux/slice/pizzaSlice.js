const { createAsyncThunk, createSlice } = require('@reduxjs/toolkit');
const { PostServices } = require('../../API/PostServices');

export const fetchPizzas = createAsyncThunk(
  'users/fetchPizzas',
  async (sort, categ, currentPage) => {
    const data = await PostServices.getAll(sort, categ, currentPage);
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

export default PizzasSlice.reducer;
