import { createSlice } from "@reduxjs/toolkit";

const sliderSlice = createSlice({
    name: 'slider',
    initialState: {
        value: 0,
        length: 4
    },
    reducers : {
        nextSlide : (state, action) => {
            console.log(state.value)
            console.log(action)
            state.value = action.payload > state.length ? 0: action.payload;
        },
        prevSlide : (state, action) => {
            console.log(state.value)
            console.log(action)
            state.value = action.payload < 0 ? state.length : action.payload;
        },
        dottedSlide : () => {

        },
    }
})

export const {nextSlide, prevSlide, dottedSlide} = sliderSlice.actions

export default sliderSlice.reducer