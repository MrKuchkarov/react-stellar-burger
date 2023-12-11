import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    orderNumber: [],
    number: null,
    isLoading: false,
    error: null,
};

// export const fetchOrder = createAsyncThunk(
//     '$$order/fetchOrder',
//     async (ingredients, {rejectWithValue}) => {
//         try {
//             return request(
//                 `${BURGER_API_URL}/orders`,
//                 createOptions(Method.post, {ingredients}, getCookie("accessToken")),
//             );
//         } catch (error) {
//             if (error instanceof Error) {
//                 return rejectWithValue(error.message);
//             }
//             return rejectWithValue('Unknown error');
//         }
//     },
// );

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
