import {createSlice} from "@reduxjs/toolkit";

type TOrderDetailsSlice = {
    orderNumber: string | null,
    isLoading: boolean,
    error: string | null;
}

const initialState: TOrderDetailsSlice = {
    orderNumber: null,
    isLoading: false,
    error: null,
};


const orderDetailsSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        setOrderNumber: (state, action) => {
            state.orderNumber = action.payload;
            state.isLoading = true;
            state.error = null;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.isLoading = true;
            state.error = action.payload;
        },
    },
});

export const {setOrderNumber, setLoading, setError} =
    orderDetailsSlice.actions;

export default orderDetailsSlice.reducer;
