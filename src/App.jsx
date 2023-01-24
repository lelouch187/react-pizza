import React from 'react';

import './scss/app.scss';

import Header from './components/Header';
import { AppRouter } from './components/AppRouter';
import { PizzasContext } from './context';
import { useSelector } from 'react-redux';

function App() {
  const {fetching, currentPage} = React.useContext(PizzasContext)
  const {activeSort, sortCategories} = useSelector(state=>state.filter.sort)
  const activeCategories = useSelector(state=>state.filter.activeCategories)
  React.useEffect(() => {
    fetching(sortCategories[activeSort].value,activeCategories,currentPage);
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
