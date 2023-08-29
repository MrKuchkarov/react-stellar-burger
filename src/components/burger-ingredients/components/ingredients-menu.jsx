import React from "react";
import style from "./ingredients-mune.module.css"
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";


const IngredientsMune = () => {
    const [current, setCurrent] = React.useState('one')
    return (
        <section className={`${style.elements}`}>
            <h1 className={`${style.title} mt-10 mb-5 text text_type_main-large`}>Соберите бургер</h1>
            <div className={`${style.column}`}>
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
        </section>
    )
}
export default IngredientsMune;