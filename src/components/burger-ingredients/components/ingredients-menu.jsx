import React from "react";
import style from "./ingredients-mune.module.css"
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";


const IngredientsMune = () => {
    const [current, setCurrent] = React.useState('one')
    return (
        <div className={`${style["ingredients-elements"]} mt-10 mb-10`}>
            <h1 className={`${style["title-ingredients"]} mb-5 text text_type_main-large`}>Соберите бургер</h1>
            <div className={`${style["ingredients-column"]}`}>
                <Tab value="1" active={current === '1'} onClick={setCurrent}>
                    Булка
                </Tab>
                <Tab value="2" active={current === '2'} onClick={setCurrent}>
                    Соус
                </Tab>
                <Tab value="3" active={current === '3'} onClick={setCurrent}>
                    Начинка
                </Tab>
            </div>
        </div>
    )
}
export default IngredientsMune;