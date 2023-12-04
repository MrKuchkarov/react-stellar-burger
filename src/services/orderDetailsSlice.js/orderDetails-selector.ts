import {RootState} from "../store/store";

export const selectOrderNumber = (store: RootState) => store.order.orderNumber;
export const selectOrderIsLoading = (store: RootState) => store.order.isLoading