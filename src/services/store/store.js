import {configureStore} from "@reduxjs/toolkit";
import ingredientsSlice from "../ingredientsSlice/ingredientsSlice";
import constructorSlice from "../constructorSlice/constructorSlice";
import ingredientDetailsSlice from "../ingredientDetailsSlice/ingredientDetailsSlice";
import orderDetailsSlice from "../orderDetailsSlice.js/orderDetailsSlice";
import authReducer from "../auth/auth-slice";
import authorizedSlice, {authorizedActions} from "../webSocketSlice/authorizedSlice";
import unauthorizedSlice, {unauthorizedActions} from "../webSocketSlice/unauthorizedSlice";
import createAuthSocketMiddleWare from "../webSocketSlice/AuthSocketMiddleWare";
import createUnAuthSocketMiddleWare from "../webSocketSlice/UnAuthSocketMiddleWare";

const authorizedSocketMiddleware = createAuthSocketMiddleWare(authorizedActions);
const UnAuthorizedSocketMiddleware = createUnAuthSocketMiddleWare(unauthorizedActions);
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
