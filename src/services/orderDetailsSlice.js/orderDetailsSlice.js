import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderNumber: [],
  isLoading: false,
  error: null,
};

const orderDeatailsSlice = createSlice({
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

export const { setOrderNumber, setLoading, setError } =
  orderDeatailsSlice.actions;

export default orderDeatailsSlice.reducer;
