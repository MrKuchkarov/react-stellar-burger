import {
    Middleware,
    MiddlewareAPI,
    ActionCreatorWithPayload,
    ActionCreatorWithoutPayload
} from '@reduxjs/toolkit';
import {refreshToken} from '../../utils/api-utils';
import {IWebSocketResponse} from '../../types/web-socket';
import {AppDispatch, RootState} from '../store/store';

export type TWebSocketAction = {
    connectingBeginning: ActionCreatorWithPayload<string>,
    connectingOpened: ActionCreatorWithoutPayload,
    connectingError: ActionCreatorWithPayload<string>,
    getMessage: ActionCreatorWithPayload<IWebSocketResponse>,
    connectingClose: ActionCreatorWithoutPayload,
};

const socketMiddleware = (actions: TWebSocketAction): Middleware => {
    return ({dispatch}: MiddlewareAPI<AppDispatch, RootState>) => {
        let socket: WebSocket | null = null;

        const onSocketOpen = (dispatch: AppDispatch) => {
            dispatch(actions.connectingOpened());
        };

        const onSocketError = (dispatch: AppDispatch) => {
            dispatch(actions.connectingError("Ошибка в сокете"));
        };

        const onSocketMessage = async (event: MessageEvent) => {
            const {data} = event;
            const parsedData = JSON.parse(data);

            if (parsedData.message === "Invalid or missing token") {
                console.log("Received invalid or missing token message. Refreshing token...");
                try {
                    const refreshResult = await refreshToken();
                    if (refreshResult instanceof Error) {
                        console.error("Error refreshing token:", refreshResult.message);
                        dispatch(actions.connectingError(refreshResult.message));
                    } else {
                        console.log("Token refreshed successfully. Sending updated token to the server...");
                        if (socket) {
                            socket.send(JSON.stringify({token: refreshResult.accessToken}));
                        }
                    }
                } catch (error) {
                    console.error("Failed to refresh token:", error);
                    dispatch(actions.connectingError("Failed to refresh token."));
                }
            } else if (parsedData.success) {
                dispatch(actions.getMessage(parsedData));
            } else {
                console.error("Received an error message:", parsedData.message || "Unknown error");
                dispatch(actions.connectingError(parsedData.message || "Unknown error"));
            }
        };

        const onSocketClose = () => {
            dispatch(actions.connectingClose());
        };

        const isSocketOpen = () => socket && socket.readyState === WebSocket.OPEN;

        return (next) => (action) => {
            const {type, payload} = action as { type: string, payload?: any };

            if (type === actions.connectingBeginning("").type) {
                if (!isSocketOpen()) {
                    socket = new WebSocket(payload);
                    socket.onopen = () => onSocketOpen(dispatch);
                    socket.onerror = () => onSocketError(dispatch);
                    socket.onmessage = onSocketMessage;
                }
            }

            if (socket) {
                if (isSocketOpen() && type === actions.connectingClose().type) {
                    socket.close(1000, "close normal");
                }
                socket.onclose = onSocketClose;
            }

            return next(action);
        };
    };
};

export default socketMiddleware;
