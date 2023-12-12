import {RootState} from "../../store/store";

export const selectUnOrders = (store: RootState) => store.unauthorized.orders;
export const selectUnWebSocket = (store: RootState) => store.unauthorized;

export const selectUnWebSocketIsLoading = (store: RootState) => store.unauthorized.isLoading;
export const selectFeedByUnId = (orders: string) => (store: RootState) =>
    store.unauthorized.orders.find((order) => order._id === orders);