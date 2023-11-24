import { createSlice } from "@reduxjs/toolkit";
import {sliderData} from '../../assets/data/dummyData'


const sliderSlice = createSlice({
    name: 'slider',
    initialState: {
        value: 0,
        length: sliderData.length
    },
    reducers : {
        nextSlide : (state, action) => {
            console.log(state.value)
            console.log(action)
            state.value = action.payload > state.length - 1 ? 0: action.payload;
        },
        prevSlide : (state, action) => {
            console.log(state.value)
            console.log(action)
            state.value = action.payload < 0 ? state.length - 1 : action.payload;
        },
        dottedSlide : (state, action) => {
            const slide = action.payload
            console.log('dot', slide)
            state.value = slide
        },
    }
})

export const {nextSlide, prevSlide, dottedSlide} = sliderSlice.actions

export default sliderSlice.reducer