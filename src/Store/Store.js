import { configureStore } from '@reduxjs/toolkit'
import sliderSlice from './Reducers/sliderSlice'
import productsSlice from './Reducers/productsSlice'
import cartSlice from './Reducers/cartSlice'
import authSlice from './Reducers/authSlice'


export const store = configureStore({
    reducer: {
        slider: sliderSlice,
        filterProducts: productsSlice,
        cart: cartSlice,
        auth: authSlice
    },
})