const socketMiddleware = (wsActions) => {
    return (store) => {
        let socket = null;

        return (next) => (action) => {
            const {dispatch} = store;
            const {type, payload} = action;
            const {
                connectingStart,
                connectingOpened,
                connectingError,
                getMessage,
                connectingClose,
            } = wsActions;

            if (type === connectingStart.type) {
                socket = new WebSocket(payload);
            }

            if (socket) {
                socket.onopen = () => {
                    dispatch(connectingOpened());
                };

                socket.onerror = () => {
                    dispatch(connectingError());
                };

                socket.onmessage = (event) => {
                    const {data} = event;
                    const parsedData = JSON.parse(data);
                    dispatch(getMessage(parsedData));
                };

                if (type === connectingClose.type) {
                    socket.close(1000, 'closed normal');
                }

                socket.onclose = () => {
                    dispatch(connectingClose());
                };
            }

            next(action);
        };
    };
};

export default socketMiddleware;
