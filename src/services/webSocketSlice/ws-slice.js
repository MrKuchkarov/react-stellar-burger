import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    wsConnected: false,
    orders: [],
    total: null,
    totalToday: null,
    error: false,
}

const webSocketSlice = createSlice({
    name: "$$webSocket",
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
            state.orders = action.payload.orders;
            state.total = action.payload.total;
            state.totalToday = action.payload.totalToday;
        }
    }
});

export const wsActions = webSocketSlice.actions;
export default webSocketSlice.reducer;