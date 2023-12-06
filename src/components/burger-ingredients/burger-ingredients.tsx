import React, {useEffect, useRef, useState} from "react";
import BurgerCards from "./components/burger-cards";
import style from "./burger-ingredients.module.css";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import {useInView} from "react-intersection-observer";


const BurgerIngredients = () => {

    // const bunRef = useRef<HTMLLIElement>(null);
    // const mainRef = useRef<HTMLLIElement>(null);
    // const sauceRef = useRef<HTMLLIElement>(null);
    const [current, setCurrent] = useState("bun");
    const handleCurrentTab = (str: string) => {
        setCurrent(str);
        document.getElementById(str)!.scrollIntoView({behavior: "smooth"});
    };

    const options = {
        threshold: 0,
        delay: 100,
    };

    const [bunRef, inViewBun] = useInView(options);
    const [mainRef, inViewMain] = useInView(options);
    const [sauceRef, inViewSauce] = useInView(options);

    useEffect(() => {
        if (inViewBun) {
            setCurrent("bun");
        } else if (inViewSauce) {
            setCurrent("sauce");
        } else if (inViewMain) {
            setCurrent("main");
        }
    }, [inViewBun, inViewMain, inViewSauce]);
    return (
        <section>
            <div className={`${style["ingredients-elements"]} mt-10 mb-10`}>
                <h1
                    className={`${style["title-ingredients"]} mb-5 text text_type_main-large`}
                >
                    Соберите бургер
                </h1>
                <div className={`${style["ingredients-column"]}`}>
                    <Tab
                        value="bunSection"
                        active={current === 'bun'}
                        onClick={handleCurrentTab}

                    >
                        Булка
                    </Tab>
                    <Tab
                        value="mainSection"
                        active={current === 'main'}
                        onClick={handleCurrentTab}
                    >
                        Начинка
                    </Tab>
                    <Tab
                        value="sauceSection"
                        active={current === 'sauce'}
                        onClick={handleCurrentTab}
                    >
                        Соус
                    </Tab>
                </div>
            </div>
            <BurgerCards bunRef={bunRef} sauceRef={sauceRef} mainRef={mainRef}/>
        </section>
    );
};

export default BurgerIngredients;
