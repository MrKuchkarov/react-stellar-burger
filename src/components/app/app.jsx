import React, {useEffect} from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import {HomePages} from "../../pages/home-pages/home-pages";
import {Login} from "../../pages/login/login";
import {Profile} from "../../pages/profile/profile";
import {Register} from "../../pages/register/register";
import {IngredietnsPage} from "../../pages/ingredients/ingredietns-page";
import {ForgotPassword} from "../../pages/forgot-password/forgot-password";
import {ResetPassword} from "../../pages/reset-password/reset-password";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {OnlyAuth, OnlyUnAuth} from "../protected-route/protected-route";
import {fetchIngredients} from "../../utils/ApiService";
import {checkUserAuth} from "../../services/auth/auth-async-thunks";
import {useDispatch, useSelector} from "react-redux";
import {hideModal} from "../../services/ingredientsSlice/ingredientsSlice";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";
import NotFound404 from "../../pages/NotFound404/NotFound404";
import ConditionalLoader from "./components/pre-loader-conditions";

const routes = {
    home: "/",
    login: "/login",
    profile: "/profile",
    register: "/register",
    forgotPassword: "/forgot-password",
    resetPassword: "/reset-password",
    ingredientsId: "/ingredients/:id"
};


function App() {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const background = location.state && location.state.background;


    useEffect(() => {
        dispatch(fetchIngredients());
        dispatch(checkUserAuth());
    }, []);

    const handleCloseModal = (card) => {
        dispatch(hideModal());
        navigate(-1);
    };

    return (
        <div className={styles["app"]}>
            <AppHeader/>
            <ConditionalLoader/>
            <Routes location={background || location}>
                <Route path={routes.home} element={<HomePages/>}/>
                <Route path={routes.login} element={<OnlyUnAuth component={<Login/>}/>}/>
                <Route
                    path={routes.profile}
                    element={<OnlyAuth component={<Profile/>}/>}
                />
                <Route
                    path={routes.register}
                    element={<OnlyUnAuth component={<Register/>}/>}
                />
                <Route path={routes.ingredientsId} element={<IngredietnsPage/>}/>
                <Route
                    path={routes.forgotPassword}
                    element={<OnlyUnAuth component={<ForgotPassword/>}/>}
                />
                <Route
                    path={routes.resetPassword}
                    element={<OnlyUnAuth component={<ResetPassword/>}/>}
                />
                <Route path="*" element={<NotFound404/>}/>
            </Routes>
            {background && (
                <Routes>
                    <Route
                        path={routes.ingredientsId}
                        element={
                            <Modal title={"Детали ингредиентов"} closeModal={handleCloseModal}>
                                <IngredientDetails/>
                            </Modal>
                        }
                    />
                </Routes>

            )}

        </div>
    );
}

export default App;
