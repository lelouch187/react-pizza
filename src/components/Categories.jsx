import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeActiveCategories, selectActiveCategories } from '../redux/slice/filterSlice';

const Categories = () => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const dispatch = useDispatch()
  const activeCategories = useSelector(selectActiveCategories)
  return (
    <div className="categories">
      <ul>
        {categories.map((item,index)=>{
          return <li key={item}
          onClick={()=>dispatch(changeActiveCategories(index))} 
          className={activeCategories===index?'active':''}>{item}</li>
        })}
      </ul>
    </div>
  );
};

export default Categories;
