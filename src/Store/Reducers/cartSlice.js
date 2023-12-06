import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems : localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}

const productsSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addToCart: (state, action) => {

            // if -1 mean item not exist then add it, else 1 then it exists and increase the the number of them
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)

            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1
                toast.info(`Increased ${action.payload.name} Quantity`, {position: 'bottom-left'})
            } else {
                const tempProduct = {...action.payload, cartQuantity: 1}
                state.cartItems.push(tempProduct)
                toast.success(`${action.payload.name} is already in your cart`, {position: 'bottom-left'})
            }

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        removeFromCart: (state, action) => {
            const nextCartItem = state.cartItems.filter((item) => item.id !== action.payload.id)
            state.cartItems = nextCartItem
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
            toast.error(`${action.payload.name} remove from cart`, {position: 'bottom-left'})
        },
        decreaseIndex : (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)

            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1
                toast.info(`Decreased ${action.payload.name} cart quantity`, {position: 'bottom-left'})
            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextCartItem = state.cartItems.filter((item) => item.id !== action.payload.id)
                state.cartItems = nextCartItem
                toast.error(`${action.payload.name} remove from cart`, {position: 'bottom-left'})
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        clearCart: (state) => {
            state.cartItems = []
            toast.error(`Cart Deleted`, {position: 'bottom-left'})
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))

        },
        getTotals : (state) => {
            // Total Amount In The Cart
            const totalQuantity = state.cartItems.reduce((acc, item) => acc + item.cartQuantity, 0)

            // Total Amount Of Products
            const totalAmount = state.cartItems.reduce((acc, item) => acc + item.price * item.cartQuantity, 0)
            
            state.cartTotalQuantity = totalQuantity
            state.cartTotalAmount = totalAmount
        },
        CheckCart: (state) => {
            state.cartItems = []
            toast.success(`Order has been sent, You'll receive a message with details`, {position: 'bottom-left'})
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        }
    }
})

export const { addToCart, removeFromCart, decreaseIndex, clearCart, getTotals, CheckCart } = productsSlice.actions

export default productsSlice.reducer