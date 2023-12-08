import {fetchIngredients} from '../../utils/ApiService';
import {createSlice} from '@reduxjs/toolkit';
import {IIngredient} from "../../types";
import {TStatus} from "../../types/status";

type TIngredientsSlice = {
    ingredients: IIngredient[];
    status: TStatus;
    isLoading: boolean;
    error: string | null;
    visible: boolean;
}

const initialState: TIngredientsSlice = {
    ingredients: [],
    status: "idle",
    isLoading: true,
    error: null,
    visible: false,
}

const ingredientsSlice = createSlice({
    name: "$$ingredients",
    initialState,
    reducers: {
        setIngredients(state, action) {
            state.ingredients = action.payload;
        },
        showModal(state) {
            state.visible = true;
        },
        hideModal(state) {
            state.visible = false;
        },
        closeErrModal(state) {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchIngredients.pending, (state) => {
                state.status = "loading";
                state.error = null;
                state.isLoading = true;
            })
            .addCase(fetchIngredients.rejected, (state, action) => {
                state.status = "rejected";
                state.error = action.payload as string || "Cannot load data";
                state.isLoading = false;
            })
            .addCase(fetchIngredients.fulfilled, (state, action) => {
                state.status = "success";
                state.ingredients = action.payload;
                state.error = null;
                state.isLoading = false;
            })
    },

})


export const {setIngredients, showModal, hideModal} = ingredientsSlice.actions;

export default ingredientsSlice.reducer;
