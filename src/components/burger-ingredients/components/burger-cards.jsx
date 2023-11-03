import React, {useMemo} from "react";
import style from "./burger-cards.module.css";
import {useSelector} from "react-redux";
import PropTypes from "prop-types";
import {selectIngredients} from "../../../services/ingredientsSlice/ingredients-selector";
import {useLocation} from "react-router-dom";
import {ingredientCategories} from "../../../utils/consts";
import {renderIngredientList} from "./renderIngredientList";

const cardContainerClass = `${style["card-container"]}`;
const titleClass = `${style["title-buns"]} pt-10 pb-5 text text_type_main-medium`;

const BurgerCards = ({bunRef, sauceRef, mainRef}) => {
    const ingredients = useSelector(selectIngredients);
    const ingredientsTypesSet = new Set(ingredients.map((card) => card.type))
    const ingredientsTypes = [...ingredientsTypesSet]
    const location = useLocation();

    // Фильтрация игрениентов по катигориям
    const categorizedIngredients = useMemo(() => ({
        buns: ingredients.filter((item) => item.type === "bun"),
        sauces: ingredients.filter((item) => item.type === "sauce"),
        mains: ingredients.filter((item) => item.type === "main"),
    }), [ingredients]);

    // const categorizedIngredients = useMemo(() => {
    //     const categorized = {};
    //     for (const category in ingredientCategories) {
    //         categorized[category] = ingredients.filter((item) => item.type === category);
    //     }
    //     return categorized;
    // }, [ingredients]);

    return (
        <>
            <div className={`${style["scroll-ingredients"]} custom-scroll`}>
                {ingredientsTypes.map((type) => (
                    <div key={type} className={cardContainerClass}>
                        <h2
                            id={`${type}Section`}
                            className={titleClass}
                        >
                            {ingredientCategories[type]}
                        </h2>
                        {type === "bun"
                            &&
                            renderIngredientList(type, categorizedIngredients.buns, bunRef, location)
                        }
                        {type === "sauce"
                            &&
                            renderIngredientList(type, categorizedIngredients.sauces, sauceRef, location)
                        }
                        {type === "main"
                            &&
                            renderIngredientList(type, categorizedIngredients.mains, mainRef, location)
                        }
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
