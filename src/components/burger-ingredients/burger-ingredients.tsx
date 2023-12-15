import React, {useRef, useState} from "react";
import BurgerCards from "./components/burger-cards";
import style from "./burger-ingredients.module.css";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import {useScrollGroups} from "./components/useScrollGroups";


const BurgerIngredients = () => {
    const [current, setCurrent] = useState("bun");
    const handleCurrentTab = (str: string) => {
        setCurrent(str);
        document.getElementById(str)!.scrollIntoView({behavior: "smooth"});
    };
    const bunsRef = useRef<HTMLUListElement>(null);
    const saucesRef = useRef<HTMLUListElement>(null);
    const mainsRef = useRef<HTMLUListElement>(null);
    const tabsRef = useRef<HTMLDivElement>(null);

    const handleScrollGroups = useScrollGroups(
        {
            tabsRef,
            bunsRef,
            saucesRef,
            mainsRef,
            current,
            setCurrent,
        }
    );
    return (
        <section>
            <div className={`${style["ingredients-elements"]} mt-10 mb-10`}>
                <h1
                    className={`${style["title-ingredients"]} mb-5 text text_type_main-large`}
                >
                    Соберите бургер
                </h1>
                <div ref={tabsRef} className={`${style["ingredients-column"]}`}>
                    <Tab
                        value="bunSection"
                        active={current === "Булки"}
                        onClick={handleCurrentTab}

                    >
                        Булки
                    </Tab>
                    <Tab
                        value="mainSection"
                        active={current === "Начинки"}
                        onClick={handleCurrentTab}
                    >
                        Начинки
                    </Tab>
                    <Tab
                        value="sauceSection"
                        active={current === "Соусы"}
                        onClick={handleCurrentTab}
                    >
                        Соусы
                    </Tab>
                </div>
            </div>
            <BurgerCards handleScrollGroups={handleScrollGroups} bunsRef={bunsRef} saucesRef={saucesRef}
                         mainsRef={mainsRef}/>
        </section>
    );
};

export default BurgerIngredients;
