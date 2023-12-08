import {RootState} from "../store/store";

export const selectIngredientsState = (store: RootState) => store.ingredients;
export const selectIngredients = (store: RootState) => store.ingredients.ingredients;
export const selectIsLoading = (store: RootState) => store.ingredients.status;
export const selectError = (store: RootState) => store.ingredients.error;

export const selectVisible = (store: RootState) => store.ingredients.visible;
export const selectIngredientById = (id: string | undefined) => (store: RootState) =>
    id ? store.ingredients.ingredients.find((ingredient) => ingredient._id === id) : undefined;
