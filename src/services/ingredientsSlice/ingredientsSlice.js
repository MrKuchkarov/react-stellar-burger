import { fetchIngredients } from '../../utils/ApiService';
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
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredients.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ingredients = action.payload;
      })
      .addCase(fetchIngredients.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },

})


export const { setIngredients, setSelectedCard } = ingredientsSlice.actions;

export default ingredientsSlice.reducer;
