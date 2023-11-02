import React, {useMemo} from "react";
import style from "./burger-cards.module.css";
import {useSelector} from "react-redux";
import IngredientCard from "./IngredientCard";
import PropTypes from "prop-types";
import {selectIngredients} from "../../../services/ingredientsSlice/ingredients-selector";
import {Link, useLocation} from "react-router-dom";


const BurgerCards = ({bunRef, sauceRef, mainRef}) => {
    const ingredients = useSelector(selectIngredients);
    const ingredientsTypes = Array.isArray(ingredients) ? [...new Set(ingredients.map((card) => card.type))] : [];
    const location = useLocation();

    // Фильтрация игрениентов по катигориям
    const categorizedIngredients = useMemo(() => ({
        buns: ingredients.filter((item) => item.type === "bun"),
        sauces: ingredients.filter((item) => item.type === "sauce"),
        mains: ingredients.filter((item) => item.type === "main"),
    }), [ingredients]);
    
    return (
        <>
            <div className={`${style["scroll-ingredients"]} custom-scroll`}>
                {ingredientsTypes.map((type) => (
                    <div key={type} className={`${style["card-container"]}`}>
                        <h2
                            id={
                                type === "bun"
                                    ? "bunSection"
                                    : type === "sauce"
                                        ? "sauceSection"
                                        : "mainSection"
                            }
                            className={`${style["title-buns"]} pt-10 pb-5 text text_type_main-medium`}
                        >
                            {type === "bun"
                                ? "Булки"
                                : type === "sauce"
                                    ? "Соусы"
                                    : "Начинки"}
                        </h2>
                        <ul className={`${style["cards-list"]} `}>
                            {type === "bun" &&
                                categorizedIngredients.buns.map((ingredients) => (
                                    <Link
                                        // onClick={() => handleOpenModal(ingredients)}
                                        key={ingredients._id}
                                        to={`ingredients/${ingredients._id}`}
                                        state={{background: location}}
                                        className={style.link}
                                    >
                                        <li
                                            ref={bunRef}
                                        >
                                            <IngredientCard ingredients={ingredients}/>
                                        </li>
                                    </Link>
                                ))}
                            {type === "sauce" &&
                                categorizedIngredients.sauces.map((ingredients) => (
                                    <Link
                                        key={ingredients._id}
                                        to={`ingredients/${ingredients._id}`}
                                        state={{background: location}}
                                        className={style.link}
                                    >
                                        <li
                                            ref={sauceRef}
                                        >
                                            <IngredientCard ingredients={ingredients}/>
                                        </li>
                                    </Link>
                                ))}
                            {type === "main" &&
                                categorizedIngredients.mains.map((ingredients) => (
                                    <Link
                                        key={ingredients._id}
                                        to={`ingredients/${ingredients._id}`}
                                        state={{background: location}}
                                        className={style.link}
                                    >
                                        <li
                                            ref={mainRef}
                                        >
                                            <IngredientCard ingredients={ingredients}/>
                                        </li>
                                    </Link>
                                ))}
                        </ul>
                    </div>
                ))}
            </div>

        </>
    );
};

BurgerCards.propTypes = {
    bunRef: PropTypes.func.isRequired,
    sauceRef: PropTypes.func.isRequired,
    mainRef: PropTypes.func.isRequired,
};

export default BurgerCards;
