export const selectUnOrders = (store) => store.unauthorized.orders;
export const selectUnWebSocket = (store) => store.unauthorized;

export const selectUnWebSocketIsLoading = (store) => store.unauthorized.isLoading;
export const selectFeedByUnId = (id) => (store) =>
    store.unauthorized.orders.find((order) => order._id === id);