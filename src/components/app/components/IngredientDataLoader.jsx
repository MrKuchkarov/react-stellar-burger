import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchIngredients} from "../../../utils/ApiService";
import {fetchGetUser, fetchRefreshToken} from "../../../services/auth/auth-async-thunks";
import {getCookie} from "../../../utils/cookie";
import {refreshToken} from "../../../utils/consts";
import {selectAuth} from "../../../services/auth/auth-selector";
import {setIngredients} from "../../../services/ingredientsSlice/ingredientsSlice";
import {selectIngredientsState} from "../../../services/ingredientsSlice/ingredients-selector";

function IngredientDataLoader() {
    const accessToken = getCookie('accessToken');
    const isAuth = useSelector(selectAuth);
    const dispatch = useDispatch();
    const {error, status} = useSelector(selectIngredientsState);

    useEffect(() => {
        dispatch(fetchIngredients());

        if (accessToken) {
            dispatch(fetchGetUser());
        }
    }, []);
    useEffect(() => {
        if (isAuth && refreshToken) {
            dispatch(fetchRefreshToken());
        }
    }, []);

    return null;
}

export default IngredientDataLoader;
