import { Categories, SortPopup, PizzaItem } from "../components"

const Home = ({pizzas}) => {
    return (
        <div className="container">
            <div className="content__top">
              <Categories items={["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]}/>
              <SortPopup items={["популярности", "цене", "алфавиту"]} />
            </div>
            <h2 className="content__title">Все
              пиццы</h2>
            <div className="content__items">
              {
                pizzas.map(pizza =>
                  <PizzaItem key={pizza.id} {...pizza} />)
              }
            </div>
          </div>
    )
}

export default Home