import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bun: {},
  other: [],
};

const constructorSlice = createSlice({
  name: 'constructorSlice',
  initialState,
  reducers: {
    setBun: (state, action) => {
      state.bun = action.payload;
    },
    addOtherIngredient: (state, action) => {
      state.other.push(action.payload);
    },
    removeOtherIngredient: (state, action) => {
      state.other = state.other.filter(ingredient => ingredient._id !== action.payload);
    },
    clearIngredients: (state) => {
      state.bun = null;
      state.other = [];
    },
  },
});

export const { setBun, addOtherIngredient, removeOtherIngredient, clearIngredients } = constructorSlice.actions;

export default constructorSlice.reducer;
