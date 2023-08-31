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
                <Tab value="1" onClick={() => scrollToSection("bunSection")}>
                    Булка
                </Tab>
                <Tab value="2" onClick={() => scrollToSection("sauceSection")}>
                    Соус
                </Tab>
                <Tab value="3" onClick={() => scrollToSection("mainSection")}>
                    Начинка
                </Tab>
            </div>
        </div>
    )
}
export default IngredientsMune;