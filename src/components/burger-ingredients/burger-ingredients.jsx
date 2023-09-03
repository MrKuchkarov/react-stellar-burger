import React from "react";
import BurgerCards from "./components/burger-cards";


function BurgerIngredients({ ingredients }) {
    return (
        <section>
            <BurgerCards ingredients={ingredients}/>
        </section>
    )
}

export default BurgerIngredients;