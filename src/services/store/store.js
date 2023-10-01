import { configureStore } from "@reduxjs/toolkit";
import ingredientsSlice from "../ingredientsSlice/ingredientsSlice";
import constructorSlice from "../constructorSlice/constructorSlice";
import ingredientDetailsSlice from "../ingredientDetailsSlice/ingredientDetailsSlice";
import orderDetailsSlice from "../orderDetailsSlice.js/orderDetailsSlice";

export const store = configureStore({
  reducer: {
    ingredients: ingredientsSlice,
    filling: constructorSlice,
    details: ingredientDetailsSlice,
    order: orderDetailsSlice,
  },
});
