import React from 'react';
import { useSelector } from 'react-redux';
import { changeActiveCategories, selectActiveCategories } from '../redux/slice/filterSlice';
import { useAppDispatch } from '../redux/store';

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const Categories:React.FC = React.memo(() => {
  const dispatch = useAppDispatch()
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
})

export default Categories;
