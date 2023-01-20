import React from 'react';
import { PizzasContext } from '../context';

const Categories = () => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const { setIsActive, isActive} = React.useContext(PizzasContext)
  return (
    <div className="categories">
      <ul>
        {categories.map((item,index)=>{
          return <li key={item}
          onClick={()=>setIsActive(index)} 
          className={isActive===index?'active':''}>{item}</li>
        })}
      </ul>
    </div>
  );
};

export default Categories;
