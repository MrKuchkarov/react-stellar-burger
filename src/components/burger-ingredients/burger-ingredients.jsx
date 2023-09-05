import React from "react";
import BurgerCards from "./components/burger-cards";
import PropTypes from "prop-types";


function BurgerIngredients({ ingredients }) {

    return (
        <section>
            <BurgerCards ingredients={ingredients} />
        </section>
    )
}

BurgerIngredients.propTypes = {
    ingredients: PropTypes.array.isRequired
}
export default BurgerIngredients;