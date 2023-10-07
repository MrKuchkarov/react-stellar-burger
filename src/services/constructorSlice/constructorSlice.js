import {createSlice} from "@reduxjs/toolkit";
import update from "immutability-helper";
import {v4 as uuidv4} from "uuid";

const initialState = {
    bun: null, // Массив для хранения булок
    other: [], // Массив для хранения ингредиентов
};

const constructorSlice = createSlice({
    name: "constructorSlice",
    initialState,
    reducers: {
        setBun: (state, action) => {
            state.bun = action.payload; //Добавление булки
        },
        addOtherIngredient: {
            reducer: (state, action) => {
                const ingredient = action.payload;
                state.other.push(ingredient); //Добавление остальных ингредиентов
            },
            prepare: (ingredient) => {
                const uid = uuidv4(); // Генерирую уникальный идентификатор с помощью uuidv4
                return {payload: {...ingredient, key: uid}}; // Добавлю поле 'key' с сгенерированным UID к объекту ингредиента
            },
        },
        removeOtherIngredient: (state, action) => {
            const ingredient = action.payload;

            state.other = state.other.filter(
                (item) => item.key !== ingredient.key
            )
        },
        moveCard(state, action) {
            const {dragIndex, hoverIndex} = action.payload;
            const array = [...state.other];
            const draggingItem = array[dragIndex];
            state.other = update(array, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, draggingItem],
                ],
            });
        },
        clearIngredients: (state) => {
            state.bun = null;
            state.other = [];
        },
    },
});

export const {
    setBun,
    addOtherIngredient,
    removeOtherIngredient,
    clearIngredients,
    moveCard,
} = constructorSlice.actions;

export default constructorSlice.reducer;
