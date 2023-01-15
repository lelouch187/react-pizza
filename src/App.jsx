import React from 'react';

import './scss/app.scss';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import { useFetching } from './hooks/useFetching';
import { PostServices } from './API/PostServices';
import Skeleton from './components/PizzaBlock/Skeleton';

function App() {
  const [pizzas, setPizzas] = React.useState([]);
  const [fetching, isLoading, error] = useFetching(async () => {
    const response = await PostServices.getAll();
    setPizzas(response);
  });
  React.useEffect(() => {
    fetching(); // eslint-disable-next-line
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {error
              ? 'Что-то пошло не так ...'
              : isLoading
              ? [...new Array(6)].map((_, i) => {
              return <Skeleton key={i} />})
              : pizzas.map((pizzaObj) => {
                  return <PizzaBlock key={pizzaObj.id} {...pizzaObj} />;
                })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
