import { useSelector } from 'react-redux';
import { selectcurrentPage, setCurrentPage } from '../../redux/slice/filterSlice';
import { useAppDispatch } from '../../redux/store';
import s from './Pagination.module.scss';

const pages: number[] = [1, 2, 3]

export const Pagination: React.FC = () => {
  const currentPage  = useSelector(selectcurrentPage);
  const dispatch = useAppDispatch()
  return (
    <ul className={s.root}>
      {pages.map((page) => {
        return (
          <li className={currentPage===page?s.active:s.page}
           key={page} onClick={(e:React.MouseEvent<HTMLLIElement>) => dispatch(setCurrentPage(page))}>
            {page}
          </li>
        );
      })}
    </ul>
  );
};
