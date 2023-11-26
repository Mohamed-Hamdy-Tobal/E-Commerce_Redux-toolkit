import { configureStore } from '@reduxjs/toolkit'
import sliderSlice from './Reducers/sliderSlice'
import productsSlice from './Reducers/productsSlice'


export const store = configureStore({
    reducer: {
        slider: sliderSlice,
        filterProducts: productsSlice
    },
})