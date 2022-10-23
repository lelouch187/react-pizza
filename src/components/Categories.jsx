

const Categories = ({items,index}) => {
    return(
        <div className="categories">
        <ul>
          <li className="active">Все</li>
          {items.map(item => <li key={`${item}_${index}`}>{item}</li>)}
        </ul>
      </div>
    )
}

export default Categories