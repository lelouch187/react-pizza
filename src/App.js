import {Routes, Route} from 'react-router-dom'
import {Header} from "./components";
import { Home, Cart } from "./pages";


const App = () => {
  return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<Cart />} path='/cart' />
          </Routes>
        </div>
      </div>
  );
}

export default App;
