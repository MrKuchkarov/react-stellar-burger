import { configureStore } from "@reduxjs/toolkit";
import ingredientsSlice from "../ingredientsSlice/ingredientsSlice";
import constructorSlice from "../constructorSlice/constructorSlice";

export const store = configureStore({
    reducer: {
        ingredients: ingredientsSlice,
        filling: constructorSlice,

    },
})