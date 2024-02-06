import { createSlice } from "@reduxjs/toolkit";

export const auth = createSlice({
    name: 'authorization',
    initialState: {
        status: 'false',
        userData: null
    },
    reducers: {
        login: (state, action) => {
            state.status = true
            state.userData = action.payload.userData
        },
        logout: (state, action) => {
            state.status = false
            state.userData = null;
        }
    }
})


export const { login, logout } = auth.actions;

export default auth.reducer;