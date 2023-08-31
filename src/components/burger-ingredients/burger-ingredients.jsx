import React from "react";
import IngredientsMune from "./components/ingredients-menu";
import BurgerCards from "./components/burger-cards";
import style from "./burger-ingredients.module.css"

function BurgerIngredients() {
    return (
        <section>
            <BurgerCards />
        </section>
    )
}

export default BurgerIngredients;