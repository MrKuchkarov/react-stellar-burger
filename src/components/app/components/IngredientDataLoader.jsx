import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchIngredients} from "../../../utils/ApiService";

function IngredientDataLoader() {
    const dispatch = useDispatch();
    const {error, isLoading} = useSelector((state) => state.ingredients);

    useEffect(() => {
        dispatch(fetchIngredients());
    }, [dispatch]);

    if (isLoading) {
        return <p>Загрузка...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return null;
}

export default IngredientDataLoader;
