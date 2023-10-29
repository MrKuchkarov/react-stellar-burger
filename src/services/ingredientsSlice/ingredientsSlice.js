import {fetchIngredients} from '../../utils/ApiService';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    ingredients: [],
    status: "idle",
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
                state.status = "Loading";
                state.error = null;
            })
            .addCase(fetchIngredients.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload || "Cannot load data";
            })
            .addCase(fetchIngredients.fulfilled, (state, action) => {
                state.status = 'success';
                state.ingredients = action.payload;
            })
    },

})


export const {setIngredients, setSelectedCard, showModal, hideModal} = ingredientsSlice.actions;

export default ingredientsSlice.reducer;
