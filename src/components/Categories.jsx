import React, { useState } from "react"

const Categories = ({items}) => {
    
    const [activeItem, setActiveItem] = useState(null)


    const onActiveItem = (index) => {
        setActiveItem(index)
    }

    return (
        (
            <div className="categories">
            <ul>
              <li onClick={() => onActiveItem(null)}
              className={activeItem === null ? 'active' : ''}
              >Все</li>
              {items && items.map((item, index) => <li 
              onClick={() => onActiveItem(index)}
              className={activeItem === index ? 'active' : ''}
              key={`${item}_${index}`}>{item}</li>)}
            </ul>
          </div>
        )
    )
}

export default Categories