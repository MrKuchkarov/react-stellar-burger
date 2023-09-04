import React, {useState} from "react";
import BurgerCards from "./components/burger-cards";
import Modal from "../modal/modal";


function BurgerIngredients({ ingredients }) {

    return (
        <section>
            <BurgerCards ingredients={ingredients} />
        </section>
    )
}

export default BurgerIngredients;