import React from 'react';
import { useSelector } from 'react-redux';
import { PostServices } from '../API/PostServices';
import { useFetching } from '../hooks/useFetching';

export const PizzasContext = React.createContext();

export const CreateContext = ({ children }) => {
  const [pizzas, setPizzas] = React.useState([]);
  const [fetching, isLoading, error] = useFetching(async (sort, categ, title) => {
    const response = await PostServices.getAll(sort, categ, title);
    setPizzas(response);
  });
  const search = useSelector((state) => state.filter.search);
  const defferedSearch = React.useDeferredValue(search)

  const sortedPizzas =React.useMemo(()=>{
    return pizzas.filter((pizza) =>
    pizza.title.toLowerCase().includes(defferedSearch.toLowerCase()))

  },[defferedSearch,pizzas]) 


  const pages = [1, 2, 3];
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <PizzasContext.Provider
      value={{
        sortedPizzas,
        setPizzas,
        fetching,
        isLoading,
        error,
        pages,
        currentPage,
        setCurrentPage,
      }}>
      {children}
    </PizzasContext.Provider>
  );
};
