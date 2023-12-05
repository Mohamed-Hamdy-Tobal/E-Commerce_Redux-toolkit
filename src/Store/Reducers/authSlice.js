import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: JSON.parse(sessionStorage.getItem('authUser')) || {
        name: '',
        password: '',
        authUser: false
    }
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers : {
        login : (state, action) => {
            const userID = action.payload
            const userValidation = /^[A-Za-z]{4,10}$/i.test(userID.name)
            const passwordValidation = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,10}$/i.test(userID.password)
            state.user = userID

            console.log(userID)
            console.log(userValidation)
            console.log(passwordValidation)

            if (!userValidation || !passwordValidation) {
                state.user.authUser = false
            } else {
                state.user.authUser = true
                // To Save The Data On Session Storage
                const saveState = JSON.stringify(userID)
                sessionStorage.setItem('authUser', saveState)
            }

        },
        logout : (state) => {
            state.user = {
                name: '',
                password: '',
                authUser: false
            }
            sessionStorage.clear()
            localStorage.clear()
        }
    }
})


export const { login, logout } = authSlice.actions

export default authSlice.reducer