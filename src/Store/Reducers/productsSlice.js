import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

const productsSlice = createSlice({
    name: 'productsSlice',
    initialState: {
        filterProducts: JSON.parse(sessionStorage.getItem('products')) || storeData,
    },
    reducers: {
        setFilterProducts: (state, action) => {
            try {
                // Try To Get Data From Json File
                const filter = storeData.filter(product => { product.type == action.payload })
                state.filterProducts = filter
                console.log('filter', filter)

                // To Save The Data On Session Storage
                const saveState = JSON.stringify(filter)
                sessionStorage.setItem('products', saveState)
            } catch (error) {
                return error
            }
        }
    }
})

export const { setFilterProducts } = productsSlice.actions

export default productsSlice.reducer