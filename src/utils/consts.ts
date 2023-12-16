import {getCookie} from "./cookie";

export const BURGER_API_URL = "https://norma.nomoreparties.space/api";
export const webSocketUrl = "wss://norma.nomoreparties.space/orders";

export const ApiGetTheIngredients = `${BURGER_API_URL}/ingredients`;
export const ApiOrderDetails = `${BURGER_API_URL}/orders`;

export enum Method {
    get = "GET",
    post = "POST",
    delete = "DELETE",
    path = "PATCH",
    put = "PUT",
}

export const routes = {
    home: "/",
    login: "/login",
    profile: "/profile",
    register: "/register",
    forgotPassword: "/forgot-password",
    resetPassword: "/reset-password",
    ingredientsDynamicId: "/ingredients/:id",
    feed: "/feed",
    feedId: "/feed/:id",
    profileOrder: "/profile/orders",
    profileOrderDynamicId: "/profile/orders/:id",
    profileOrdersRoute: "OrderList",
};

export const ingredientCategories: Record<string, string> = {
    bun: "Булки",
    sauce: "Соусы",
    main: "Начинки",
};
export const refreshToken = getCookie("refreshToken");
export const accessToken = getCookie("accessToken");