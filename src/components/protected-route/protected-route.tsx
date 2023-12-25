import {Navigate, useLocation} from "react-router-dom";
import {useAppSelector} from "../../services/store/store";
import {selectAuthUser, selectIsAuthChecked} from "../../services/auth/auth-selector";

type TProtectedRoute = {
    onlyUnAuth?: boolean;
    component: JSX.Element;
};

const Protected = ({onlyUnAuth = false, component}: TProtectedRoute) => {
    const isAuth = useAppSelector(selectIsAuthChecked);
    const user = useAppSelector(selectAuthUser);
    const location = useLocation();

    if (!isAuth) {
        return null;
    }

    if (onlyUnAuth && user) {
        const {from} = location.state || {from: {pathname: "/"}};
        return <Navigate to={from}/>;
    }

    if (!onlyUnAuth && !user) {
        return <Navigate to="/login" state={{from: location}}/>;
    }

    return component;
};

export const OnlyAuth = Protected;

export const OnlyUnAuth = ({component}: { component: JSX.Element }) => (
    <Protected onlyUnAuth={true} component={component}/>
);
