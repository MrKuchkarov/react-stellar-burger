export const selectUnOrders = (store) => store.unauthorized.UnOrders;
export const selectUnWebSocket = (store) => store.unauthorized;

export const selectUnWebSocketIsLoading = (store) => store.unauthorized.isLoading;
export const selectFeedByUnId = (id) => (store) =>
    store.unauthorized.UnOrders.find((order) => order._id === id);