import {useLocation} from 'react-router-dom';
import {useEffect} from 'react';

import {wsUrl} from '../utils/consts';
import {getCookie} from '../utils/cookie';
import {useDispatch} from "react-redux";
import {wsActions} from "../services/webSocketSlice/ws-slice";


export function useSocket() {
    const location = useLocation();
    const dispatch = useDispatch();
    const {connectingStart, connectingClose} = wsActions;

    useEffect(() => {
        if (location.pathname.startsWith('/feed')) {
            dispatch(connectingStart(`${wsUrl}/all`));
        } else {
            const accessToken = getCookie('accessToken').replace(
                'Bearer ',
                '',
            );
            dispatch(connectingStart(`${wsUrl}?token=${accessToken}`));
        }

        return () => {
            dispatch(connectingClose());
        };
    }, [location]);
}