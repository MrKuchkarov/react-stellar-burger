import {configureStore} from "@reduxjs/toolkit";
import ingredientsSlice from "../ingredientsSlice/ingredientsSlice";
import constructorSlice from "../constructorSlice/constructorSlice";
import ingredientDetailsSlice from "../ingredientDetailsSlice/ingredientDetailsSlice";
import orderDetailsSlice from "../orderDetailsSlice.js/orderDetailsSlice";
import authReducer from "../auth/auth-slice";
import AuthorizedSlice, {AuthorizedActions} from "../webSocketSlice/AuthSocketSlice/AuthorizedSlice";
import UnAuthorizedSlice, {UnAuthorizedActions} from "../webSocketSlice/UnAuthSocketSlice/UnAuthorizedSlice";
import createSocketMiddleWare from "../webSocketSlice/SocketMiddleWare";

const authorizedSocketMiddleware = createSocketMiddleWare(AuthorizedActions);
const UnAuthorizedSocketMiddleware = createSocketMiddleWare(UnAuthorizedActions);
export const store = configureStore({
    reducer: {
        ingredients: ingredientsSlice,
        filling: constructorSlice,
        details: ingredientDetailsSlice,
        order: orderDetailsSlice,
        auth: authReducer,
        authorized: AuthorizedSlice,
        unauthorized: UnAuthorizedSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authorizedSocketMiddleware, UnAuthorizedSocketMiddleware),
    serializableCheck: false,
});
