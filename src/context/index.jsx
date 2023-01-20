import React from 'react';
import { PostServices } from '../API/PostServices';
import { useFetching } from '../hooks/useFetching';

export const PizzasContext = React.createContext();

export const CreateContext = ({ children }) => {
  const [pizzas, setPizzas] = React.useState([]);
  const [fetching, isLoading, error] = useFetching(async (sort,categ) => {
    const response = await PostServices.getAll(sort,categ);
    setPizzas(response);
  });

  const [isActive, setIsActive] = React.useState(0);


  const [activeCategories, setActiveCategories] = React.useState(0);
  const sortCategories = [
    {name:'популярности', value:'rating'}, 
    {name:'цене',value:'price'}, 
    {name:'алфавиту', value:'title'}];

    const [inputValue, setInptutValue] = React.useState('')

  return (
    <PizzasContext.Provider
      value={{ inputValue, setInptutValue, pizzas, setPizzas, fetching, 
      isLoading, error, isActive, setActiveCategories,
      setIsActive, activeCategories,
      sortCategories}}>
      {children}
    </PizzasContext.Provider>
  );
};
