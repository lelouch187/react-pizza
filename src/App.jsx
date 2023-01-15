import './scss/app.scss';
import pizzas from './assets/pizzas.json'

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';


function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
          {
            pizzas.length&&pizzas.map(pizzaObj=>{
              return <PizzaBlock key={pizzaObj.id} {...pizzaObj} />
            })
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
