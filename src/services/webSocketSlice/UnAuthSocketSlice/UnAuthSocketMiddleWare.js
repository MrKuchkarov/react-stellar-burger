const createUnAuthSocketMiddleWare = (unauthorizedActions) => {
    let socket = null;
    const {
        UnConnectingBeginning,
        UnConnectingOpened,
        UnConnectingError,
        UnGetMessage,
        UnConnectingClose,
    } = unauthorizedActions;

    const onSocketOpen = (dispatch) => {
        dispatch(UnConnectingOpened());
    };

    const onSocketError = (dispatch) => {
        dispatch(UnConnectingError());
    };

    const onSocketMessage = (dispatch) => (event) => {
        const {data} = event;
        const parsedData = JSON.parse(data);
        dispatch(UnGetMessage(parsedData));
    };

    const onSocketClose = (dispatch) => {
        dispatch(UnConnectingClose());
    };

    const isSocketOpen = () => socket && socket.readyState === WebSocket.OPEN;

    return (store) => (next) => (action) => {
        const {dispatch} = store;
        const {type, payload} = action;

        if (type === UnConnectingBeginning.type) {
            if (!isSocketOpen()) {
                // Проверка, что WebSocket ещё не открыт
                socket = new WebSocket(payload);
                socket.onopen = () => onSocketOpen(dispatch);
                socket.onerror = () => onSocketError(dispatch);
                socket.onmessage = onSocketMessage(dispatch, unauthorizedActions, UnGetMessage);
            }
        }

        if (socket) {
            if (isSocketOpen() && type === UnConnectingClose.type) {
                // Проверка, что WebSocket открыт перед закрытием
                socket.close(1000, "close normal");
            }
            socket.onclose = () => onSocketClose(dispatch);
        }

        next(action);
    };
};

export default createUnAuthSocketMiddleWare;
