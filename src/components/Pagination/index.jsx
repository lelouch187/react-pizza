import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../redux/slice/filterSlice';
import s from './Pagination.module.scss';

export const Pagination = () => {
  const currentPage  = useSelector(state=>state.filter.currentPage);
  const dispatch = useDispatch()
  const pages = [1, 2, 3]
  return (
    <ul className={s.root}>
      {pages.map((page) => {
        return (
          <li className={currentPage===page?s.active:s.page}
           key={page} onClick={() => dispatch(setCurrentPage(page))}>
            {page}
          </li>
        );
      })}
    </ul>
  );
};
