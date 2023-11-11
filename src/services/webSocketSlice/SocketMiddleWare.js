import {refreshToken} from "../../utils/api-utils";

const createSocketMiddleWare = (actions) => {
    let socket = null;
    const {
        connectingBeginning,
        connectingOpened,
        connectingError,
        getMessage,
        connectingClose,
    } = actions;

    const onSocketOpen = (dispatch) => {
        dispatch(connectingOpened());
    };

    const onSocketError = (dispatch) => {
        dispatch(connectingError());
    };

    const onSocketMessage = (dispatch) => async (event) => {
        const {data} = event;
        const parsedData = JSON.parse(data);

        if (parsedData.message === 'Invalid or missing token') {
            console.log('Received invalid or missing token message. Refreshing token...');
            try {
                const refreshResult = await refreshToken();
                if (refreshResult instanceof Error) {
                    console.error('Error refreshing token:', refreshResult.message);
                    dispatch(connectingError(refreshResult.message));
                } else {
                    console.log('Token refreshed successfully. Sending updated token to the server...');
                    // Обновление токена успешно, повторно отправляем запрос с новым токеном
                    socket.send(JSON.stringify({token: refreshResult.accessToken}));
                }
            } catch (error) {
                console.error('Failed to refresh token:', error);
                dispatch(connectingError('Failed to refresh token.'));
            }
        } else if (parsedData.success) {
            dispatch(getMessage(parsedData));
        } else {
            console.error('Received an error message:', parsedData.message || 'Unknown error');
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
