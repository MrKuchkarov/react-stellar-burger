import React, {useEffect, useRef, useState} from "react";
import BurgerCards from "./components/burger-cards";
import style from "./burger-ingredients.module.css";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import {useInView} from "react-intersection-observer";


const BurgerIngredients = () => {

    // const HandleScrollGrupp = () => {
    //     const bunsRef = useRef(null);
    //     const saucesRef = useRef(null);
    //     const tabsRef = useRef(null);
    //     const mainsRef = useRef(null);
    //
    //     const tabsBottom = tabsRef.current?.getBoundingClientRect().bottom;
    //     const bunsTop = bunsRef.current?.getBoundingClientRect().top;
    //     const saucesTop = saucesRef.current?.getBoundingClientRect().top;
    //     const mainsTop = mainsRef.current?.getBoundingClientRect().top;
    //
    //     if (!tabsBottom || !bunsTop || !saucesTop || !mainsTop) {
    //         return;
    //     }
    //     const bunsDelta = Math.abs(bunsTop = tabsBottom);
    //     const saucesDelta = Math.abs(saucesTop = tabsBottom);
    //     const mainsDelta = Math.abs(mainsTop = tabsBottom);
    //
    //     const min = Math.min(bunsDelta, saucesDelta, mainsDelta);
    //
    //     const newTab = min === bunsDelta ? "bun" : min === saucesDelta ? "sauce" : "main";
    //     if (newTab !== currentTab) {
    //         dispatch(switchTab(newTab))
    //     }
    // }

    const [current, setCurrent] = useState('bun');
    const handleCurrentTab = (str) => {
        setCurrent(str);
        document.getElementById(str).scrollIntoView({behavior: 'smooth'});
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
            setCurrent('bun');
        } else if (inViewSauce) {
            setCurrent('sauce');
        } else if (inViewMain) {
            setCurrent('main');
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
