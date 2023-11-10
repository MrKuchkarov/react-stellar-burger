const createAuthSocketMiddleWare = (authorizedActions) => {
    let socket = null;
    const {
        connectingBeginning,
        connectingOpened,
        connectingError,
        getMessage,
        connectingClose,
    } = authorizedActions;

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
                socket.onmessage = onSocketMessage(dispatch, authorizedActions, getMessage);
            }
        }

        if (socket) {
            if (isSocketOpen() && type === authorizedActions.connectingClose.type) {
                // Проверка, что WebSocket открыт перед закрытием
                socket.close(1000, "close normal");
            }
            socket.onclose = () => onSocketClose(dispatch);
        }

        next(action);
    };
};

export default createAuthSocketMiddleWare;
