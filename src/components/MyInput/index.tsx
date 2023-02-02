import React from 'react';
import { useSelector } from 'react-redux';
import { onChangeInput, selectSearch } from '../../redux/slice/filterSlice';
import { useAppDispatch } from '../../redux/store';


import s from './MyInput.module.scss';

export const MyInput: React.FC = () => {
    const search = useSelector(selectSearch)
    const dispatch = useAppDispatch()

    
  return (
    <div className={s.container}>
      <input onChange={(e: React.ChangeEvent<HTMLInputElement>) =>{
        dispatch(onChangeInput(e.target.value))
      }}
      value={search}
       type={s.text} placeholder="Поиск пиццы ..." />
      <div onClick={(e:React.MouseEvent<HTMLDivElement>)=>dispatch(onChangeInput(''))}
      className={s.search}></div>
    </div>
  );
};
