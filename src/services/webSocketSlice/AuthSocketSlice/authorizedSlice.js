// authorizedSlice.js
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    wsConnected: false,
    orders: [],
    error: false,
    isLoading: false,
};

const AuthorizedSlice = createSlice({
    name: "$$authorized",
    initialState,
    reducers: {
        connectingBeginning(state) {
            state.wsConnected = true;
            state.error = false;
        },
        connectingOpened(state) {
            state.wsConnected = true;
        },
        connectingError(state) {
            state.wsConnected = false;
            state.error = true;
        },
        connectingClose(state) {
            state.wsConnected = false;
        },
        getMessage(state, action) {
            const {orders} = action.payload;
            state.orders = orders;
        },
        loadingStart(state) {
            state.isLoading = true;
        },
        loadingComplete(state) {
            state.isLoading = false;
        },
    },
});

export const AuthorizedActions = AuthorizedSlice.actions;
export default AuthorizedSlice.reducer;
