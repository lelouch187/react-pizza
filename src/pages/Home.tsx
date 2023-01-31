import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import { Pagination } from '../components/Pagination';
import { useSelector } from 'react-redux';
import { selectPizzasData } from '../redux/slice/pizzaSlice';
import { selectSearch } from '../redux/slice/filterSlice';



export const Home:React.FC = () => {
  const {pizzas, status} = useSelector(selectPizzasData)
  const search = useSelector(selectSearch);
  const defferedSearch = React.useDeferredValue(search)

  const sortedPizzas =React.useMemo(()=>{
    return pizzas.filter((pizza:any) =>
    pizza.title.toLowerCase().includes(defferedSearch.toLowerCase()))

  },[defferedSearch,pizzas]) 

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
          : sortedPizzas.map((pizzaObj:any) => {
              return <PizzaBlock key={pizzaObj.id} {...pizzaObj} />;
            })}
      </div>
      <Pagination />
    </>
  );
};
