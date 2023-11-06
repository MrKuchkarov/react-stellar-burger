const createSocketMiddleWare = (wsActions) => {
    let socket = null;
    const {
        connectingBeginning,
        connectingOpened,
        connectingError,
        getMessage,
        connectingClose,
    } = wsActions;

    const onSocketOpen = (dispatch) => {
        dispatch(connectingOpened());
    };

    const onSocketError = (dispatch) => {
        dispatch(connectingError());
    };

    const onSocketMessage = (dispatch) => (event) => {
        const {data} = event;
        const parsedData = JSON.parse(data);
        dispatch(getMessage(parsedData));
    };

    const onSocketClose = (dispatch) => {
        dispatch(connectingClose());
    };

    const isSocketOpen = () => socket && socket.readyState === WebSocket.OPEN;

    return (store) => (next) => (action) => {
        const {dispatch} = store;
        const {type, payload} = action;

        if (type === connectingBeginning.type) {
            if (!isSocketOpen()) {
                // Проверка, что WebSocket ещё не открыт
                socket = new WebSocket(payload);
                socket.onopen = () => onSocketOpen(dispatch);
                socket.onerror = () => onSocketError(dispatch);
                socket.onmessage = onSocketMessage(dispatch, wsActions, getMessage);
            }
        }

        if (socket) {
            if (isSocketOpen() && type === wsActions.connectingClose.type) {
                // Проверка, что WebSocket открыт перед закрытием
                socket.close(1000, "close normal");
            }
            socket.onclose = () => onSocketClose(dispatch);
        }

        next(action);
    };
};

export default createSocketMiddleWare;
