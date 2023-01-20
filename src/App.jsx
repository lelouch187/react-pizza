import React from 'react';

import './scss/app.scss';

import Header from './components/Header';
import { AppRouter } from './components/AppRouter';
import { PizzasContext } from './context';

function App() {
  const {fetching, isActive, sortCategories, activeCategories} = React.useContext(PizzasContext)

  React.useEffect(() => {
    fetching(sortCategories[activeCategories].value,isActive);
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [isActive, activeCategories]);

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
