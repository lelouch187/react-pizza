import { Route, Routes } from "react-router-dom"

import  {MyRoutes} from '../router'

export const AppRouter:React.FC = () => {
  return (
   <Routes>
    {MyRoutes.map(route=> {
        return <Route key={route.path}
        path={route.path}
        element={route.element}
        />
    })}
   </Routes>
  )
}