import {RootState} from "../store/store";

export const selectIngredientDetails = (store: RootState) => store.details.ingredientsDetails;