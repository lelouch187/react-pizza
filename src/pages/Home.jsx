import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import { PizzasContext } from '../context';



export const Home = () => {
  const {error, isLoading, pizzas} = React.useContext(PizzasContext)
  console.log(pizzas)
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
