import {RootState} from "../store/store";

export const selectFillingBun = (store: RootState) => store.filling.bun;
export const selectFillingOther = (store: RootState) => store.filling.other;
export const selectError = (store: RootState) => store.ingredients.error;