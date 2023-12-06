import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: JSON.parse(sessionStorage.getItem('authUser')) || {
        name: '',
        password: '',
        authUserName: false,
        authUserPass: false,
        authUser: true
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

            if (userValidation && passwordValidation) {
                state.user.authUserName = false;
                state.user.authUserPass = false;
                state.user.authUser = false;
                state.user.authUser = false;
                console.log('Both name and password are valid');
                
                // To Save The Data On Session Storage
                const saveState = JSON.stringify(userID);
                sessionStorage.setItem('authUser', saveState);
            } else if (userValidation) {
                state.user.authUserName = false;
                state.user.authUserPass = true;
                state.user.authUser = true;
                console.log('Name is valid, but password is invalid');
            } else if (passwordValidation) {
                state.user.authUserName = true;
                state.user.authUserPass = false;
                state.user.authUser = true;
                console.log('Name is invalid, but password is valid');
            } else {
                state.user.authUserName = true;
                state.user.authUserPass = true;
                state.user.authUser = true;
                console.log('Both name and password are invalid');
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