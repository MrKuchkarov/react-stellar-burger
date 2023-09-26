
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ingredients: [],
  isLoading: true,
  error: null,
};

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    setIngredients(state, action) {
      state.ingredients = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setIngredients, setError } = ingredientsSlice.actions;

export default ingredientsSlice.reducer;
