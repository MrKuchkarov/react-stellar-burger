
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ingredients: [],
  selectedCard: null,
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
    setSelectedCard: (state, action) => {
      state.selectedCard = action.payload;
    },
    // resetSelectedCard: (state) => {
    //   state.selectedCard = null;
    // },
  },
});

export const { setIngredients, setError, setSelectedCard, resetSelectedCard } = ingredientsSlice.actions;

export default ingredientsSlice.reducer;
