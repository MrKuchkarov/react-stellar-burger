// authorizedSlice.js
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IWebSocketOrder} from "../../../types/web-socket";

export type TAuthorizedSlice = {
    wsConnected: boolean;
    orders: IWebSocketOrder[];
    error: boolean;
    isLoading: boolean;
};

const initialState: TAuthorizedSlice = {
    wsConnected: false,
    orders: [],
    error: false,
    isLoading: false,
};

const AuthorizedSlice = createSlice({
    name: "$$authorized",
    initialState,
    reducers: {
        connectingBeginning(state, action: PayloadAction<string>) {
            state.wsConnected = true;
            state.error = false;
        },
        connectingOpened(state) {
            state.wsConnected = true;
        },
        connectingError(state, action: PayloadAction<string>) {
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
