import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import { PizzasContext } from '../context';
import { Pagination } from '../components/Pagination';



export const Home = () => {
  const {status, sortedPizzas} = React.useContext(PizzasContext)

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {status==='error'
          ? 'Что-то пошло не так ...'
          : status==='pending'
          ? [...new Array(6)].map((_, i) => {
              return <Skeleton key={i} />;
            })
          : sortedPizzas.map((pizzaObj) => {
              return <PizzaBlock key={pizzaObj.id} {...pizzaObj} />;
            })}
      </div>
      <Pagination />
    </>
  );
};
