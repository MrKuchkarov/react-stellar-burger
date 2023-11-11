export const selectOrders = (store) => store.authorized.orders;
export const selectWebSocket = (store) => store.authorized;

export const selectWebSocketIsLoading = (store) => store.authorized.isLoading;
export const selectFeedById = (id) => (store) =>
    store.authorized.orders.find((order) => order._id === id);

