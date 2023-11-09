import {getCookie} from "./cookie";

export const BURGER_API_URL = "https://norma.nomoreparties.space/api";


export const Method = {
    get: "GET",
    post: "POST",
    delete: "DELETE",
    path: "PATCH",
    put: "PUT",
}

export const routes = {
    home: "/",
    login: "/login",
    profile: "/profile",
    register: "/register",
    forgotPassword: "/forgot-password",
    resetPassword: "/reset-password",
    ingredientsId: "/ingredients/:id"
};

export const ingredientCategories = {
    bun: "Булки",
    sauce: "Соусы",
    main: "Начинки",
};
export const refreshToken = getCookie("refreshToken");
export const accessToken = getCookie("accessToken");