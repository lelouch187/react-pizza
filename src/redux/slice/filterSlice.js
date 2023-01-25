import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sort: {
    visiblePopup: false,
    sortCategories: [
      { name: 'популярности', value: 'rating' },
      { name: 'цене', value: 'price' },
      { name: 'алфавиту', value: 'title' },
    ],
    activeSort: 0,
  },
  activeCategories: 0,
  search: '',
  currentPage: 1,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeActiveCategories: (state, { payload }) => {
      state.activeCategories = payload;
    },
    changeActiveSort: (state, { payload }) => {
      state.sort.activeSort = payload;
    },
    changeVisiblePopup: (state, { payload }) => {
      state.sort.visiblePopup = payload;
    },
    onChangeInput: (state, { payload }) => {
      state.search = payload;
    },
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
    },
  },
});
export const {
  changeActiveCategories,
  changeActiveSort,
  onChangeInput,
  changeVisiblePopup,
  setCurrentPage,
} = filterSlice.actions;

export default filterSlice.reducer;
