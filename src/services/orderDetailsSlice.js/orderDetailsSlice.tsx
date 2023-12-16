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
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchOrder.pending, (state) => {
    //             state.status = 'loading';
    //             state.error = null;
    //         })
    //         .addCase(fetchOrder.rejected, (state, action) => {
    //             state.status = 'rejected';
    //             state.error = action.payload || 'Cannot send order';
    //         })
    //         .addCase(fetchOrder.fulfilled, (state, action) => {
    //             state.status = 'success';
    //             state.error = null;
    //             state.number = action.payload.order.number;
    //         });
    // },
});

export const {setOrderNumber, setLoading, setError} =
    orderDetailsSlice.actions;

export default orderDetailsSlice.reducer;
