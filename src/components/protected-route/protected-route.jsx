import {
    Navigate,
    useLocation,
} from "react-router-dom";
import {selectAuth, selectAuthUser} from "../../services/auth/auth-selector"
import {useSelector} from "react-redux";


const Protected = ({onlyUnAuth, component}) => {
    const isAuth = useSelector(selectAuth);
    const user = useSelector(selectAuthUser);
    const location = useLocation();
    console.log(isAuth)
    if (!isAuth) {
        return null;
    }
    console.log(location.state)
    if (onlyUnAuth && !isAuth) {
        const {from} = location.state || {from: {pathname: "/"}};
        console.log(from)
        return <Navigate to={from}/>;
    }

    if (!onlyUnAuth && isAuth) {
        return <Navigate to="/login" state={{from: location}}/>;
    }

    return component;
};

export const OnlyAuth = Protected;
export const OnlyUnAuth = ({component}) => (
    <Protected onlyUnAuth={true} component={component}/>
);