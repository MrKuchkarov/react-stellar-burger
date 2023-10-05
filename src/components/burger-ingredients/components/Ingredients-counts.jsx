import React from "react";
import {useSelector} from "react-redux";
import style from "./Ingredients-counts.module.css"

const IngredientsCounts = ({ingredientId}) => {
    const ingredientCount = useSelector((state) => state.filling.ingredientCounts[ingredientId] || null);

    // Если счетчик больше нуля, показываем компонент
    if (ingredientCount > 0) {
        return <div className={`${style["ingredients-counts"]}`}>{ingredientCount}</div>;
    }

    // Если счетчик равен нулю или null, не отображаем компонент
    return null;
};

export default IngredientsCounts;
