const createSocketMiddleWare = (actions) => {
    let socket = null;
    const {
        connectingBeginning,
        connectingOpened,
        connectingError,
        getMessage,
        connectingClose,
        refreshTokenAction,
    } = actions;

    const onSocketOpen = (dispatch) => {
        dispatch(connectingOpened());
    };

    const onSocketError = (dispatch) => {
        dispatch(connectingError());
    };

    const onSocketMessage = (dispatch) => (event) => {
        const {data} = event;
        const parsedData = JSON.parse(data);

        // Добавлена проверка на сообщение 'Invalid or missing token'
        if (parsedData.message === 'Invalid or missing token') {
            // Диспетчеризация действия для обновления токена
            dispatch(refreshTokenAction());
        } else if (parsedData.success) {
            dispatch(getMessage(parsedData));
        } else {
            dispatch(connectingError(parsedData.message || 'Unknown error'));
        }
    }
    
    const onSocketClose = (dispatch) => {
        dispatch(connectingClose());
    };

    const isSocketOpen = () => socket && socket.readyState === WebSocket.OPEN;

    return (store) => (next) => (action) => {
        const {dispatch} = store;
        const {type, payload} = action;

        if (type === connectingBeginning().type) {
            if (!isSocketOpen()) {
                // Проверка, что WebSocket ещё не открыт
                socket = new WebSocket(payload);
                socket.onopen = () => onSocketOpen(dispatch);
                socket.onerror = () => onSocketError(dispatch);
                socket.onmessage = onSocketMessage(dispatch, actions, getMessage);
            }
        }

        if (socket) {
            if (isSocketOpen() && type === connectingClose().type) {
                // Проверка, что WebSocket открыт перед закрытием
                socket.close(1000, "close normal");
            }
            socket.onclose = () => onSocketClose(dispatch);
        }

        next(action);
    };
};

export default createSocketMiddleWare;
