import { configureStore } from "@reduxjs/toolkit";
import ingredientsSlice from "../ingredientsSlice/ingredientsSlice";

export const store = configureStore({
    reducer: {
        ingredients: ingredientsSlice,
    },
})