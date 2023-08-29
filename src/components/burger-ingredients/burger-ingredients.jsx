import React from "react";
import IngredientsMune from "./components/ingredients-menu";
import BurgerCards from "./components/burger-cards";
import style from "./burger-ingredients.module.css"

function BurgerIngredients() {
    return (
        <div>
            <IngredientsMune />
            <div className={`${style.scroll} custom-scroll`}>
            <BurgerCards>Булки</BurgerCards>
            <BurgerCards>Соусы</BurgerCards>
            <BurgerCards>Начинки</BurgerCards>
            </div>
        </div>
    )
}

export default BurgerIngredients;