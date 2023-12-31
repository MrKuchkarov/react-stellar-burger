// unauthorizedSlice.js
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IWebSocketOrder} from "../../../types/web-socket";

export type TUnauthorizedSlice = {
    UnWsConnected: boolean;
    orders: IWebSocketOrder[];
    total: number | null;
    totalToday: number | null;
    error: boolean;
    isLoading: boolean;
};

const initialState: TUnauthorizedSlice = {
    UnWsConnected: false,
    orders: [],
    total: null,
    totalToday: null,
    error: false,
    isLoading: false,
};

const UnauthorizedSlice = createSlice({
    name: "$$unauthorized",
    initialState,
    reducers: {
        connectingBeginning(state, action: PayloadAction<string>) {
            state.UnWsConnected = true;
            state.error = false;
        },
        connectingOpened(state) {
            state.UnWsConnected = true;
        },
        connectingError(state, action: PayloadAction<string>) {
            state.UnWsConnected = false;
            state.error = true;
        },
        connectingClose(state) {
            state.UnWsConnected = false;
        },
        getMessage(state, action) {
            const {orders, total, totalToday} = action.payload;
            state.orders = orders;
            state.total = total;
            state.totalToday = totalToday;
        },
        loadingStart(state) {
            state.isLoading = true;
        },
        loadingComplete(state) {
            state.isLoading = false;
        },
    },
});

export const UnAuthorizedActions = UnauthorizedSlice.actions;
export default UnauthorizedSlice.reducer;
