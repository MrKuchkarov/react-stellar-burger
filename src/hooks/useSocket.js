import {useLocation} from 'react-router-dom';
import {useEffect} from 'react';
import {webSocketUrl} from '../utils/consts';
import {getCookie} from '../utils/cookie';
import {useDispatch} from "react-redux";
import {AuthorizedActions} from "../services/webSocketSlice/AuthSocketSlice/AuthorizedSlice";
import {UnAuthorizedActions} from "../services/webSocketSlice/UnAuthSocketSlice/UnAuthorizedSlice";


export function useSocket(useSocketActions) {
    const location = useLocation();
    const dispatch = useDispatch();
    const {connectingBeginning, connectingClose} = useSocketActions ? AuthorizedActions : UnAuthorizedActions;

    useEffect(() => {
        if (location.pathname.startsWith("/feed")) {
            dispatch(connectingBeginning(`${webSocketUrl}/all`));
        } else {
            const accessToken = getCookie("accessToken").replace(
                "Bearer ",
                "",
            );
            dispatch(connectingBeginning(`${webSocketUrl}?token=${accessToken}`));
        }

        return () => {
            dispatch(connectingClose());
        };
    }, [location, connectingBeginning, connectingClose, dispatch]);
}