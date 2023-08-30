import React from "react";
import style from "./ingredients-mune.module.css"
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";


const IngredientsMune = () => {
    const [current, setCurrent] = React.useState('one')
    return (
        <div className={`${style["ingredients-elements"]} mt-10 mb-10`}>
            <h1 className={`${style["title-ingredients"]} mb-5 text text_type_main-large`}>Соберите бургер</h1>
            <div className={`${style["ingredients-column"]}`}>
                <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                    Булка
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                    Соус
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                    Начинка
                </Tab>
            </div>
        </div>
    )
}
export default IngredientsMune;