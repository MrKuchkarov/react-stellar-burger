import React from "react";
import BurgerCards from "./components/burger-cards";
import BurgerComponentsPropTypes from "../../utils/burger-components-propTypes";


function BurgerIngredients({ ingredients }) {

    return (
        <section>
            <BurgerCards ingredients={ingredients} />
        </section>
    )
}


BurgerIngredients.propTypes = BurgerComponentsPropTypes;

export default BurgerIngredients;