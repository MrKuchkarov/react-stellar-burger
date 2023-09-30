import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bun: null,
  other: [], // Массив для хранения ингредиентов
  ingredientCounts: {}, // Объект для хранения количества каждого ингредиента
};

const constructorSlice = createSlice({
  name: 'constructorSlice',
  initialState,
  reducers: {
    setBun: (state, action) => {
      const newBun = action.payload;
      const oldBun = state.bun;

      // Уменьшаем счетчик старой булки, если она была выбрана
      if (oldBun) {
        state.ingredientCounts[oldBun._id]-= 2;
        if (state.ingredientCounts[oldBun._id] === 0) {
          delete state.ingredientCounts[oldBun._id];
        }
      }

      // Увеличиваем счетчик новой булки, если она добавлена
      if (newBun) {
        if (!state.ingredientCounts[newBun._id]) {
          state.ingredientCounts[newBun._id] = 2;
        } else {
          state.ingredientCounts[newBun._id]+= 2;
        }
      }

      state.bun = newBun;
    },
    addOtherIngredient: (state, action) => {
      const ingredient = action.payload;
      state.other.push(ingredient);

      // Увеличиваем счетчик для данного ингредиента
      if (!state.ingredientCounts[ingredient._id]) {
      state.ingredientCounts[ingredient._id] = 1;
    } else {
      state.ingredientCounts[ingredient._id]++;
    }
    },
    removeOtherIngredient: (state, action) => {
      const ingredientId = action.payload;

      // Уменьшаем счетчик для данного ингредиента
      if (state.ingredientCounts[ingredientId]) {
        state.ingredientCounts[ingredientId]--;

        // Если счетчик достиг нуля, удаляем ингредиент из массива
        if (state.ingredientCounts[ingredientId] === 0) {
          state.other = state.other.filter((ingredient) => ingredient._id !== ingredientId);
          delete state.ingredientCounts[ingredientId];
        }
      }
    },
    clearIngredients: (state) => {
      state.bun = null;
      state.other = [];
      state.ingredientCounts = {}; // Сбрасываем счетчики при очистке ингредиентов
    },
  },
});

export const { setBun, addOtherIngredient, removeOtherIngredient, clearIngredients } = constructorSlice.actions;

export default constructorSlice.reducer;
