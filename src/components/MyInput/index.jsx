import React from 'react';
import { PizzasContext } from '../../context';
import s from './MyInput.module.scss'

export const MyInput = () => {
    const {inputValue, setInptutValue} = React.useContext(PizzasContext)
  return (
    <div className={s.container}>
      <input onChange={e=>setInptutValue(e.target.value)}
      value={inputValue}
       type={s.text} placeholder="Поиск пиццы ..." />
      <div onClick={()=>setInptutValue('')}
      className={s.search}></div>
    </div>
  );
};
