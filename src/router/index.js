import { Cart } from "../pages/Cart";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";

export const MyRoutes = [
    {element: <Home />, path:'/'},
    {element: <Cart />, path:'/cart'},
    {element: <NotFound />, path:'*'},
]