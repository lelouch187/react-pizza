import React from 'react';

const Categories = () => {
  const [isActive,setIsActive] = React.useState(0)
  const categories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые']
  const onSetIsActive = (index) => {
    setIsActive(index)
  }

  return (
    <div className="categories">
      <ul>
        {categories.map((item,index)=>{
          return <li key={item}
          onClick={()=>onSetIsActive(index)} 
          className={isActive===index?'active':''}>{item}</li>
        })}
      </ul>
    </div>
  );
};

export default Categories;
