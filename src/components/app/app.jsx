import React, {} from "react";
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
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {hideModal} from "../../services/ingredientsSlice/ingredientsSlice";
import {useDispatch} from "react-redux";


function App() {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const background = location.state && location.state.background;
    const handleCloseModal = (card) => {
        dispatch(hideModal());
        navigate(-1);
    };

    return (
        <div className={styles["app"]}>
            <AppHeader/>
            <Routes location={background || location}>
                <Route path={"/"} element={<HomePages/>}/>
                <Route path="/login" element={<OnlyUnAuth component={<Login/>}/>}/>
                <Route path="/profile" element={<OnlyAuth component={<Profile/>}/>}/>
                <Route path="/register" element={<OnlyUnAuth component={<Register/>}/>}/>
                {/*<Route path={"/register"} element={<Register/>}/>*/}
                <Route path="/ingredients/:id" element={<IngredietnsPage/>}/>
                {/*<Route path={"/ingredients:id"} element={<IngredietnsPage/>}/>*/}
                <Route path="/forgot-password" element={<OnlyUnAuth component={<ForgotPassword/>}/>}/>
                {/*<Route path={"/forgot-password"} element={<ForgotPassword/>}/>*/}
                <Route path="/reset-password" element={<OnlyUnAuth component={<ResetPassword/>}/>}/>
                {/*<Route path={"/reset-password"} element={<ResetPassword/>}/>*/}
            </Routes>
            {background && (
                <Routes>
                    <Route path={'/ingredients/:id'}
                           element={<Modal title={"Детали ингредиентов"} closeModal={handleCloseModal}>
                               <IngredientDetails/>
                           </Modal>}
                    />

                </Routes>
            )}
        </div>
    );
}

export default App;
