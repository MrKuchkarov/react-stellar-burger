import React from 'react';
import PreLoader from "./pre-loader";
import {useSelector} from "react-redux";
import {selectIngredientsState} from "../../../services/ingredientsSlice/ingredients-selector";
import style from "./pre-loader.module.css";
import {useAppSelector} from "../../../services/store/store";

const ConditionalLoader = () => {
    const {error, isLoading, ingredients} = useAppSelector(selectIngredientsState);

    if (isLoading) {
        return <PreLoader title={"Загрузка ингредиентов"}/>;
    }

    if (error) {
        return <p className={`${style["error"]} text text_type_main-large`}>Произошла ошибка: {error}</p>;
    }

    if (!ingredients || ingredients.length === 0) {
        return <p className={`${style["no-ingredients"]} text text_type_main-large`}>Ингредиенты не найдены.</p>;
    }

    return null; // Если ни одно условие не выполнено, возвращаем null
};

export default ConditionalLoader;