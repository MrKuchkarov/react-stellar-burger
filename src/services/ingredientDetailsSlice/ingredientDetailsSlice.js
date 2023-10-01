
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ingredientsDetails: null,
};

const ingredientsDetailsSlice = createSlice({
  name: 'ingredientsDetails',
  initialState,
  reducers: {
    ingredientsDetails: (state, action) => {
      state.ingredientsDetails = action.payload;
    },
  },

})


export const { ingredientsDetails } = ingredientsDetailsSlice.actions;

export default ingredientsDetailsSlice.reducer;
