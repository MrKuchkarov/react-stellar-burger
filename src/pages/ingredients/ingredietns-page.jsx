import React from 'react';
import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import style from "./ingredients-page.module.css"

const IngredietnsPage = () => {
    return (
        <section>
            <h1 className={`${style["title"]} text text_type_main-large mt-25`}>
                Детали ингредиента
            </h1>
            <IngredientDetails/>
        </section>
    );
};

export {IngredietnsPage};