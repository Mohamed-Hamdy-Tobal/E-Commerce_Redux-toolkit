import { configureStore } from '@reduxjs/toolkit'
import sliderSlice from './Reducers/sliderSlice'


export const store = configureStore({
    reducer: {
        slider: sliderSlice
    },
})