import React from 'react';
import { PostServices } from '../API/PostServices';
import { useFetching } from '../hooks/useFetching';

export const PizzasContext = React.createContext();

export const CreateContext = ({ children }) => {
  const [pizzas, setPizzas] = React.useState([]);
  const [fetching, isLoading, error] = useFetching(async (sort, categ, title) => {
    const response = await PostServices.getAll(sort, categ, title);
    setPizzas(response);
  });

  const [isActive, setIsActive] = React.useState(0);

  const [activeCategories, setActiveCategories] = React.useState(0);
  const sortCategories = [
    { name: 'популярности', value: 'rating' },
    { name: 'цене', value: 'price' },
    { name: 'алфавиту', value: 'title' },
  ];

  const [inputValue, setInptutValue] = React.useState('');

  const sortedPizzas = pizzas.filter((pizza) =>
    pizza.title.toLowerCase().includes(inputValue.toLowerCase()),
  );

  const pages = [1,2,3]
  const [currentPage, setCurrentPage] = React.useState(1)

  return (
    <PizzasContext.Provider
      value={{
        inputValue,
        setInptutValue,
        sortedPizzas,
        setPizzas,
        fetching,
        isLoading,
        error,
        isActive,
        setActiveCategories,
        setIsActive,
        activeCategories,
        sortCategories,
        pages,currentPage, setCurrentPage,
      }}>
      {children}
    </PizzasContext.Provider>
  );
};
