import {configureStore} from "@reduxjs/toolkit";
import ingredientsSlice from "../ingredientsSlice/ingredientsSlice";
import constructorSlice from "../constructorSlice/constructorSlice";
import ingredientDetailsSlice from "../ingredientDetailsSlice/ingredientDetailsSlice";
import orderDetailsSlice from "../orderDetailsSlice.js/orderDetailsSlice";
import authReducer from "../auth/auth-slice";
import webSocketSlice, {wsActions} from "../webSocketSlice/ws-slice"
import socketMiddleware from "../webSocketSlice/AuthSocketMiddleWare";
import authorizedSlice, {authorizedActions} from "../webSocketSlice/authorizedSlice";
import unauthorizedSlice, {unauthorizedActions} from "../webSocketSlice/unauthorizedSlice";
import createSocketMiddleWare from "../webSocketSlice/AuthSocketMiddleWare";

const authorizedSocketMiddleware = createSocketMiddleWare(authorizedActions);
const UnAuthorizedSocketMiddleware = createSocketMiddleWare(unauthorizedActions);
export const store = configureStore({
    reducer: {
        ingredients: ingredientsSlice,
        filling: constructorSlice,
        details: ingredientDetailsSlice,
        order: orderDetailsSlice,
        auth: authReducer,
        authorized: authorizedSlice,
        unauthorized: unauthorizedSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authorizedSocketMiddleware, UnAuthorizedSocketMiddleware),
    serializableCheck: false,
});
