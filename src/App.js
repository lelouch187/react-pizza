import {Routes, Route} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios';

import {Header} from "./components";
import { Home, Cart } from "./pages";


const App = () => {

  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/db.json')
    .then(({data}) => setPizzas(data.pizzas))
  }, [])


  return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route element={<Home pizzas={pizzas} />} path='/' />
            <Route element={<Cart />} path='/cart' />
          </Routes>
        </div>
      </div>
  );
}

export default App;
