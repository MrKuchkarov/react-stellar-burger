import {RootState} from "../../store/store";

export const selectOrders = (store: RootState) => store.authorized.orders;
export const selectWebSocket = (store: RootState) => store.authorized;

export const selectWebSocketIsLoading = (store: RootState) => store.authorized.isLoading;
export const selectFeedById = (id: string) => (store: RootState) =>
    store.authorized.orders.find((order) => order._id === id);

