export const selectOrders = (store) => store.webSocket.orders;
export const selectWebSocket = (store) => store.webSocket;

export const selectFeedById = (id) => (store) =>
    store.webSocket.orders.find((order) => order._id === id);