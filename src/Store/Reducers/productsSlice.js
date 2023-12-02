import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

const initialState = {
    filterProducts: JSON.parse(sessionStorage.getItem('products')) || storeData,
    singlePro: JSON.parse(sessionStorage.getItem('oneProduct')) || storeData,
}

const productsSlice = createSlice({
    name: 'productsSlice',
    initialState,
    reducers: {
        setFilterProducts: (state, action) => {
            try {
                // Try To Get Data From Json File
                const filter = storeData.filter(product => (product.type) === action.payload )
                state.filterProducts = filter

                // To Save The Data On Session Storage
                const saveState = JSON.stringify(filter)
                sessionStorage.setItem('products', saveState)
            } catch (error) {
                return error
            }
        },
        singleProduct: (state, action) => {
            try {
                const onePro = storeData.filter(product => product.id === action.payload)
                state.singlePro = onePro
                
                // To Save The Data On Session Storage
                const saveState = JSON.stringify(onePro)
                sessionStorage.setItem('oneProduct', saveState)

            } catch (err) {
                return err
            }
        }
    }
})

export const { setFilterProducts, singleProduct } = productsSlice.actions

export default productsSlice.reducer

// 10