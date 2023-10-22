import React from 'react';
import IngredientDetails from "../../components/ingredient-details/ingredient-details";

const IngredietnsPage = () => {
    return (
        <div>
            <h1 className={`text text_type_main-large mt-25`}>
                Детали ингредиента
            </h1>
            <IngredientDetails/>
        </div>
    );
};

export {IngredietnsPage};