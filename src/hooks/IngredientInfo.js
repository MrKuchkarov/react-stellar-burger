import React from "react";
import PropTypes, {array} from 'prop-types';
import {useSelector} from "react-redux";
import {selectIngredients} from "../services/ingredientsSlice/ingredients-selector";

const IngredientInfo = ingredientsId => {
    const allIngredients = useSelector(selectIngredients);
    const ingredientWithInfo = ingredientsId.map((id) =>
        allIngredients.find((ingredients) => ingredients._id === id),
    );
    const uniqueIngredients = Array.from(new Set(ingredientWithInfo));
    const ingredientsWithCount = uniqueIngredients.map((ingredients) => ({
        ...ingredients,
        count: ingredientWithInfo.reduce((count, item) => {
            if (ingredients._id === item._id) {
                count += 1;
            }
            return count;
        }, 0),
    }));
    return ingredientsWithCount;
};

IngredientInfo.propTypes = {};

export default IngredientInfo;