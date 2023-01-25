import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onChangeInput } from '../../redux/slice/filterSlice';


import s from './MyInput.module.scss';

export const MyInput = () => {
    const search = useSelector(state=>state.filter.search)
    const dispatch = useDispatch()

    
  return (
    <div className={s.container}>
      <input onChange={e=>{
        dispatch(onChangeInput(e.target.value))
      }}
      value={search}
       type={s.text} placeholder="Поиск пиццы ..." />
      <div onClick={()=>dispatch(onChangeInput(''))}
      className={s.search}></div>
    </div>
  );
};
