import React from "react";
import style from "./ingredients-mune.module.css"
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";


const IngredientsMune = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div className={`${style["ingredients-elements"]} mt-10 mb-10`}>
            <h1 className={`${style["title-ingredients"]} mb-5 text text_type_main-large`}>Соберите бургер</h1>
            <div className={`${style["ingredients-column"]}`}>
                <Tab value="bunSection" onClick={scrollToSection}>
                    Булка
                </Tab>
                <Tab value="sauceSection" onClick={scrollToSection}>
                    Соус
                </Tab>
                <Tab value="mainSection" onClick={scrollToSection}>
                    Начинка
                </Tab>
            </div>
        </div>
    )
}
export default IngredientsMune;