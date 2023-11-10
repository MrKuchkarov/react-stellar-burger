import {useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {UnWebSocketUrl, webSocketUrl} from "../utils/consts";
import {getCookie} from "../utils/cookie";
import {unauthorizedActions} from "../services/webSocketSlice/unauthorizedSlice";

export function useUnAuthSocket() {
    const location = useLocation();
    const dispatch = useDispatch();
    const {UnConnectingBeginning, UnConnectingClose} = unauthorizedActions;

    useEffect(() => {
        if (location.pathname.startsWith("/feed")) {
            dispatch(UnConnectingBeginning(`${UnWebSocketUrl}/all`));
        } else {
            const accessToken = getCookie("accessToken").replace(
                "Bearer ",
                "",
            );
            dispatch(UnConnectingBeginning(`${UnWebSocketUrl}?token=${accessToken}`));
        }

        return () => {
            dispatch(UnConnectingClose());
        };
    }, [location, UnConnectingBeginning, UnConnectingClose, dispatch]);
}