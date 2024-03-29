import React from 'react';

import './scss/app.scss';

import Header from './components/Header';
import { AppRouter } from './components/AppRouter';
import { useSelector } from 'react-redux';
import { fetchPizzas } from './redux/slice/pizzaSlice';
import { selectActiveCategories, selectFilter } from './redux/slice/filterSlice';
import { useAppDispatch } from './redux/store';

const App:React.FC = () => {
  const dispatch = useAppDispatch()
  const {sort:{activeSort, sortCategories}, currentPage} = useSelector(selectFilter)
  const activeCategories = useSelector(selectActiveCategories)

  React.useEffect(() => {
    // @ts-ignore
    dispatch(fetchPizzas([sortCategories[activeSort].value,activeCategories,currentPage]))
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [activeCategories, activeSort,currentPage]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <AppRouter />
        </div>
      </div>
    </div>
  );
}

export default App;
