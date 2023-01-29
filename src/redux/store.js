import {configureStore} from '@reduxjs/toolkit'
import filter from './slice/filterSlice'
import cart from './slice/cartSlice'
import pizzas from './slice/pizzaSlice'

export const store = configureStore({
    reducer:{
        filter,
        cart,
        pizzas
    }
})