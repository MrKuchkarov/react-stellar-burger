import React, {useMemo} from "react";
import style from "./burger-cards.module.css";
import Modal from "../../modal/modal";
import IngredientDetails from "../../ingredient-details/ingredient-details";
import {useDispatch, useSelector} from "react-redux";
import {hideModal, showModal} from "../../../services/ingredientsSlice/ingredientsSlice";
import IngredientCard from "./IngredientCard";
import PropTypes from "prop-types";
import {selectIngredients} from "../../../services/ingredientsSlice/ingredients-selector";
import {Link, useLocation} from "react-router-dom";
import {ingredientsDetails} from "../../../services/ingredientDetailsSlice/ingredientDetailsSlice";

const BurgerCards = ({bunRef, sauceRef, mainRef}) => {
    const ingredients = useSelector(selectIngredients);
    const visible = useSelector((state) => state.ingredients.visible)
    const ingredientsTypes = Array.isArray(ingredients) ? [...new Set(ingredients.map((card) => card.type))] : [];
    const dispatch = useDispatch();
    const location = useLocation();
 
    // Фильтрация игрениентов по катигориям
    const categorizedIngredients = useMemo(() => {
        const result = {
            buns: ingredients.filter((item) => item.type === "bun"),
            sauces: ingredients.filter((item) => item.type === "sauce"),
            mains: ingredients.filter((item) => item.type === "main"),
        };
        return result;
    }, [ingredients]);

    // const handleOpenModal = (ingredients) => {
    //     dispatch(ingredientsDetails(ingredients));
    //     dispatch(showModal());
    // };

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
                                        to={{
                                            pathname: `ingredients/${ingredients._id}`,
                                            state: {background: location},
                                        }}
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
                                        to={{
                                            pathname: `ingredients/${ingredients._id}`,
                                            state: {background: location},
                                        }}
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
                                        to={{
                                            pathname: `ingredients/${ingredients._id}`,
                                            state: {background: location},
                                        }}
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
