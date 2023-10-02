import { fetchIngredients } from '../../utils/ApiService';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ingredients: [],
  isLoading: true,
  error: null,
  visible: false,
};

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    setIngredients(state, action) {
      state.ingredients = action.payload;
    },
    showModal(state, action) {
      state.visible = true;
    },
    hideModal(state, action) {
      state.visible = false;
    }
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


export const { setIngredients, setSelectedCard, showModal, hideModal } = ingredientsSlice.actions;

export default ingredientsSlice.reducer;
