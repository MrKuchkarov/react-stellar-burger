import {useLocation} from 'react-router-dom';
import {useEffect} from 'react';
import {webSocketUrl} from '../utils/consts';
import {getCookie} from '../utils/cookie';
import {AuthorizedActions} from "../services/webSocketSlice/AuthSocketSlice/authorizedSlice";
import {UnAuthorizedActions} from "../services/webSocketSlice/UnAuthSocketSlice/unauthorizedSlice";
import {useAppDispatch} from "../services/store/store";

type TUseSocketProps = {
    useSocketActions: boolean;
}


export function useSocket({useSocketActions}: TUseSocketProps) {
    const location = useLocation();
    const dispatch = useAppDispatch();
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