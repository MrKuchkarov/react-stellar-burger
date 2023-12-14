import {Navigate, useLocation, RouteProps} from "react-router-dom";
import {ElementType, FC} from "react";
import {useAppSelector} from "../../services/store/store";
import {selectAuthUser, selectIsAuthChecked} from "../../services/auth/auth-selector";

type TProtectedRoute = RouteProps & {
    onlyUnAuth?: boolean;
    component: ElementType;
};

const Protected: FC<TProtectedRoute> = ({onlyUnAuth = false, component: Component}: TProtectedRoute) => {
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

    return <Component/>;
};

export const OnlyAuth: FC<TProtectedRoute> = Protected;
export const OnlyUnAuth: FC<TProtectedRoute> = ({component}) => (
    <Protected onlyUnAuth={true} component={component as ElementType}/>
);