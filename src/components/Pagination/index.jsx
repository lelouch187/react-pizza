import React from 'react';
import { PizzasContext } from '../../context';
import s from './Pagination.module.scss';

export const Pagination = () => {
  const { pages, currentPage, setCurrentPage } = React.useContext(PizzasContext);

  return (
    <ul className={s.root}>
      {pages.map((page) => {
        return (
          <li className={currentPage===page?s.active:s.page}
           key={page} onClick={() => setCurrentPage(page)}>
            {page}
          </li>
        );
      })}
    </ul>
  );
};
