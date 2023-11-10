import {useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {authorizedActions} from "../services/webSocketSlice/AuthSocketSlice/authorizedSlice";
import {useEffect} from "react";
import {webSocketUrl} from "../utils/consts";
import {getCookie} from "../utils/cookie";

export function useAuthSocket() {
    const location = useLocation();
    const dispatch = useDispatch();
    const {connectingBeginning, connectingClose} = authorizedActions;

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