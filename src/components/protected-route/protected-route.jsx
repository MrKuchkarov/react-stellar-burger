import {Navigate, useLocation} from "react-router-dom";
import {
    selectAuthUser,
    selectIsAuthChecked,
} from "../../services/auth/auth-selector";
import {useSelector} from "react-redux";

const Protected = ({onlyUnAuth = false, component}) => {
    const isAuth = useSelector(selectIsAuthChecked);
    const user = useSelector(selectAuthUser);
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
export const OnlyUnAuth = ({component}) => (
    <Protected onlyUnAuth={true} component={component}/>
);
