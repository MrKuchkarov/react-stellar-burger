import {fetchIngredients} from '../../utils/ApiService';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
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
                state.status = "Loading";
                state.error = null;
                state.isLoading = true;
            })
            .addCase(fetchIngredients.rejected, (state, action) => {
                state.status = "rejected";
                state.error = action.payload || "Cannot load data";
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


export const {setIngredients, setSelectedCard, showModal, hideModal} = ingredientsSlice.actions;

export default ingredientsSlice.reducer;
