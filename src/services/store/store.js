import {configureStore} from "@reduxjs/toolkit";
import ingredientsSlice from "../ingredientsSlice/ingredientsSlice";
import constructorSlice from "../constructorSlice/constructorSlice";
import ingredientDetailsSlice from "../ingredientDetailsSlice/ingredientDetailsSlice";
import orderDetailsSlice from "../orderDetailsSlice.js/orderDetailsSlice";
import authReducer from "../auth/auth-slice";
import authSlice from "../auth/auth-slice";
import {selectWebSocket} from "../webSocketSlice/ws-selector";
import webSocketSlice, {wsActions} from "../webSocketSlice/ws-slice"
import socketMiddleware from "../webSocketSlice/socketMiddleWare";

export const store = configureStore({
    reducer: {
        ingredients: ingredientsSlice,
        filling: constructorSlice,
        details: ingredientDetailsSlice,
        order: orderDetailsSlice,
        auth: authReducer,
        webSocket: webSocketSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(socketMiddleware(wsActions)),
});
