import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

type Sort = {
  visiblePopup: boolean;
  sortCategories:Record <string,string>[];
  activeSort: number;
}

interface FilterState {
  sort:Sort;
  activeCategories: number;
  search:string;
  currentPage:number
}

const initialState:FilterState = {
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

export const selectFilter = (state:RootState)=>state.filter
export const selectActiveCategories = (state:RootState)=>state.filter.activeCategories
export const selectSort = (state:RootState)=>state.filter.sort
export const selectcurrentPage = (state:RootState)=>state.filter.currentPage
export const selectSearch = (state:RootState)=>state.filter.search
export default filterSlice.reducer;
