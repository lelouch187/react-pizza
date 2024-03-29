import React from 'react';
import { useSelector } from 'react-redux';
import {changeActiveSort, changeVisiblePopup, selectSort} from '../redux/slice/filterSlice'
import { useAppDispatch } from '../redux/store';

const Sort:React.FC = React.memo(() => {
  const dispatch = useAppDispatch()
  const {activeSort, sortCategories, visiblePopup} = useSelector(selectSort)
  const popupRef = React.useRef<HTMLDivElement>(null)

  const onChangeCategories = (index:number) => {
    dispatch(changeActiveSort(index));
    dispatch(changeVisiblePopup(false));
  };
  const hidePopup = (e:Event) => {
    if(popupRef.current&&!e.composedPath().includes(popupRef.current)) {
      dispatch(changeVisiblePopup(false))
    }
  }
  React.useEffect(()=>{
    document.addEventListener('click',hidePopup)
    return () => {
      document.removeEventListener('click',hidePopup)
    }//eslint-disable-next-line
  },[])
  return (
    <div ref={popupRef}
     className="sort">
      <div className="sort__label">
        <svg
          style={{ transform: `rotate(${visiblePopup ? '0' : '180deg'})` }}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"></path>
        </svg>
        <b>Сортировка по:</b>
        <span onClick={(e:React.MouseEvent<HTMLSpanElement>)=>dispatch(changeVisiblePopup(!visiblePopup))}
        >{sortCategories[activeSort].name}</span>
      </div>
      {visiblePopup && (
        <div className="sort__popup">
          <ul>
            {
              sortCategories.map((categories,i:number)=>{
              return <li onClick={(e:React.MouseEvent<HTMLLIElement>)=>onChangeCategories(i)}
              key={categories.name}
              className={activeSort===i?"active":''}>{categories.name}</li>
              })
            }
          </ul>
        </div>
      )}
    </div>
  );
})

export default Sort;
