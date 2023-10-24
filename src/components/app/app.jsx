import React from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import {HomePages} from "../../pages/home-pages/home-pages";
import {Login} from "../../pages/login/login";
import {Profile} from "../../pages/profile/profile";
import {Register} from "../../pages/register/register";
import {IngredietnsPage} from "../../pages/ingredients/ingredietns-page";
import {ForgotPassword} from "../../pages/forgot-password/forgot-password";
import {ResetPassword} from "../../pages/reset-password/reset-password";
import {Route, Routes} from "react-router-dom";
import {OnlyUnAuth} from "../protected-route/protected-route";

function App() {
    return (
        <div className={styles["app"]}>
            <AppHeader/>
            <Routes>
                <Route path={"/"} element={<HomePages/>}/>
                <Route path="/login" element={<OnlyUnAuth component={<Login/>}/>}/>
                <Route path={"/profile"} element={<Profile/>}/>
                <Route path={"/register"} element={<Register/>}/>
                <Route path={"/ingredients"} element={<IngredietnsPage/>}/>
                <Route path={"/forgot-password"} element={<ForgotPassword/>}/>
                <Route path={"/reset-password"} element={<ResetPassword/>}/>
            </Routes>
        </div>
    );
}

export default App;
