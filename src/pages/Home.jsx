import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

import { useFetching } from '../hooks/useFetching';
import { PostServices } from '../API/PostServices';

export const Home = () => {
  const [pizzas, setPizzas] = React.useState([]);
  const [fetching, isLoading, error] = useFetching(async () => {
    const response = await PostServices.getAll();
    setPizzas(response);
  });
  React.useEffect(() => {
    fetching();
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, []);

  return (
    <>
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
              return <Skeleton key={i} />;
            })
          : pizzas.map((pizzaObj) => {
              return <PizzaBlock key={pizzaObj.id} {...pizzaObj} />;
            })}
      </div>
    </>
  );
};
