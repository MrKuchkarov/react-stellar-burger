// unauthorizedSlice.js
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    UnWsConnected: false,
    orders: [],
    total: null,
    totalToday: null,
    error: false,
    isLoading: false,
};

const unauthorizedSlice = createSlice({
    name: "$$unauthorized",
    initialState,
    reducers: {
        UnConnectingBeginning(state) {
            state.UnWsConnected = true;
            state.error = false;
        },
        UnConnectingOpened(state) {
            state.UnWsConnected = true;
        },
        UnConnectingError(state) {
            state.UnWsConnected = false;
            state.error = true;
        },
        UnConnectingClose(state) {
            state.UnWsConnected = false;
        },
        UnGetMessage(state, action) {
            const {orders, total, totalToday} = action.payload;
            state.orders = orders;
            state.total = total;
            state.totalToday = totalToday;
        },
        UnLoadingStart(state) {
            state.isLoading = true;
        },
        UnLoadingComplete(state) {
            state.isLoading = false;
        },
    },
});

export const unauthorizedActions = unauthorizedSlice.actions;
export default unauthorizedSlice.reducer;