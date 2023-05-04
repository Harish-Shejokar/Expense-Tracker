import {  createSlice } from "@reduxjs/toolkit";


const initialAuthState = { isAuthenticated: false, userToken : "",userEmail : ""}

const AuthSlice = createSlice({
    name: "authentication",
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = !state.isAuthenticated;
        },
        UserEmail(state,action) {
            state.userEmail = action.payload;
        },
        Logintoken(state, action) {
            state.userToken = action.payload;
        }

    }
})


export const authAction = AuthSlice.actions;

export default AuthSlice.reducer;