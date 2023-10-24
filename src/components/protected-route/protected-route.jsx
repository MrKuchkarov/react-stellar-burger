import {useSelector} from "react-redux";
import {Navigate, useLocation} from "react-router-dom";
import {selectAuth, selectAuthUser, selectIsAuth} from "../../services/auth/auth-selector";

const ProtectedRoute = ({onlyForAuth = false, component}) => {
    // isAuthChecked это флаг, показывающий что проверка токена произведена
    // при этом результат этой проверки не имеет значения, важно только,
    // что сам факт проверки имел место.
    const {isAuth} = useSelector(selectIsAuth);
    const {user} = useSelector(selectAuthUser);
    console.log(isAuth)
    const location = useLocation();

    if (!isAuth) {
        // Запрос еще выполняется
        // Выводим прелоадер в ПР
        // Здесь возвращается просто null для экономии времени
        return null;
    }

    if (onlyForAuth && user) {
        // Пользователь авторизован, но роут предназначен для неавторизованного пользователя
        // Делаем редирект на главную страницу или на тот адрес, что записан в location.state.from
        const {from} = location.state || {from: {pathname: "/"}};
        return <Navigate to={from}/>;
    }

    if (!onlyForAuth && !user) {
        return <Navigate to="/login" state={{from: location}}/>;
    }

    // !onlyForAuth && user Пользователь авторизован и роут для авторизованного пользователя

    return component;
};

export const OnlyAuth = ProtectedRoute;
export const OnlyUnAuth = ({component}) => (
    <ProtectedRoute onlyUnAuth={true} component={component}/>
);