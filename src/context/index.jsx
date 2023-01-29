import React from 'react';
import { useSelector } from 'react-redux';


export const PizzasContext = React.createContext();

export const CreateContext = ({ children }) => {

  const {pizzas, status} = useSelector(state=>state.pizzas)
  const search = useSelector((state) => state.filter.search);
  const defferedSearch = React.useDeferredValue(search)

  const sortedPizzas =React.useMemo(()=>{
    return pizzas.filter((pizza) =>
    pizza.title.toLowerCase().includes(defferedSearch.toLowerCase()))

  },[defferedSearch,pizzas]) 


  ;
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <PizzasContext.Provider
      value={{
        sortedPizzas,
        status,
        currentPage,
        setCurrentPage,
      }}>
      {children}
    </PizzasContext.Provider>
  );
};
