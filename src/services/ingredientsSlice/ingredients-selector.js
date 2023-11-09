export const selectIngredientsState = (store) => store.ingredients;
export const selectIngredients = (store) => store.ingredients.ingredients;
export const selectIsLoading = (store) => store.ingredients.status;
export const selectError = (store) => store.ingredients.error;

export const selectVisible = (store) => store.ingredients.visible;
export const selectIngredientById = (id) => (store) =>
    store.ingredients.ingredients.find((ingredients) => ingredients._id === id);