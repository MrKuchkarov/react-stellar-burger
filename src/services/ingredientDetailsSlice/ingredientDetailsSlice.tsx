import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IIngredient} from "../../types";

type TIngredientsDetailsSlice = {
    ingredientsDetails: IIngredient | null;
}

const initialState: TIngredientsDetailsSlice = {
    ingredientsDetails: null,
};

const ingredientsDetailsSlice = createSlice({
    name: "ingredientsDetails",
    initialState,
    reducers: {
        ingredientsDetails: (state, action: PayloadAction<IIngredient>) => {
            state.ingredientsDetails = action.payload;
        },
    },

})


export const {ingredientsDetails} = ingredientsDetailsSlice.actions;

export default ingredientsDetailsSlice.reducer;
