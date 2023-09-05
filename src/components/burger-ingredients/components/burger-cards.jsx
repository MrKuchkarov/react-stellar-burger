import React, {useMemo, useState} from "react";
import style from "./burger-cards.module.css"
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientsMenu from "./ingredients-menu";
import Modal from "../../modal/modal";
import IngredientDetails from "../../ingredient-details/ingredient-details";
import PropTypes from "prop-types";

const BurgerCards = ({ ingredients }) => {
    const ingredientsTypes = [...new Set(ingredients.map((card) => card.type))];
    const buns = useMemo(() => ingredients.filter((item) => item.type === 'bun'), [ingredients]);
    const sauces = useMemo(() => ingredients.filter((item) => item.type === 'sauce'), [ingredients]);
    const mains = useMemo(() => ingredients.filter((item) => item.type === 'main'), [ingredients]);
    const [visible, setVisible] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleOpenModal = (card) => {
        setSelectedCard(card);
        setVisible(true);
    }

    const handleCloseModal = () => {
        setVisible(false);
    }

    return (
        <>
            <IngredientsMenu />
        <div className={`${style["scroll-ingredients"]} custom-scroll`}>
            {ingredientsTypes.map((type) => (
                <div key={type} className={`${style["card-container"]}`}>
                    <h2 id={type === 'bun' ? 'bunSection' : type === 'sauce' ? 'sauceSection' : 'mainSection'}
                        className={`${style["title-buns"]} pt-10 pb-5 text text_type_main-medium`}>
                        {type === 'bun' ? 'Булки' : type === 'sauce' ? 'Соусы' : 'Начинки'}</h2>
                    <ul className={`${style["cards-list"]} `}>
                        {type === "bun" && buns.map((card) => (
                            <li key={card._id} className={`${style["cards"]}`} onClick={() => handleOpenModal(card)}>
                                <img
                                    className={`${style["cards-photo"]} pl-4 pr-4`}
                                    src={card.image}
                                    alt={card.name}
                                />
                                <div className={style["container-price"]}>
                                    <p className={`${style["cards-price"]} pt-2 pb-2 pr-4 text text_type_digits-default`}>
                                        {card.price}
                                    </p>
                                    <CurrencyIcon type="primary" />
                                </div>
                                <p className={`${style["cards-description"]} text text_type_main-default`}>
                                    {card.name}
                                </p>
                            </li>
                        ))}
                        {type === "sauce" && sauces.map((card) => (
                            <li key={card._id} className={`${style["cards"]}`} onClick={() => handleOpenModal(card)}>
                                <img
                                    className={`${style["cards-photo"]} pl-4 pr-4`}
                                    src={card.image}
                                    alt={card.name}
                                />
                                <div className={style["container-price"]}>
                                    <p className={`${style["cards-price"]} pt-2 pb-2 pr-4 text text_type_digits-default`}>
                                        {card.price}
                                    </p>
                                    <CurrencyIcon type="primary" />
                                </div>
                                <p className={`${style["cards-description"]} text text_type_main-default`}>
                                    {card.name}
                                </p>
                            </li>
                        ))}
                        {type === "main" && mains.map((card) => (
                            <li key={card._id} className={`${style["cards"]}`} onClick={() => handleOpenModal(card)}>
                                <img
                                    className={`${style["cards-photo"]} pl-4 pr-4`}
                                    src={card.image}
                                    alt={card.name}
                                />
                                <div className={style["container-price"]}>
                                    <p className={`${style["cards-price"]} pt-2 pb-2 pr-4 text text_type_digits-default`}>
                                        {card.price}
                                    </p>
                                    <CurrencyIcon type="primary" />
                                </div>
                                <p className={`${style["cards-description"]} text text_type_main-default`}>
                                    {card.name}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
            {visible &&
            <Modal title={"Детали ингредиентов"} closeModal={handleCloseModal} >

                <IngredientDetails data={selectedCard}></IngredientDetails>
            </Modal>}
        </>
    );
};

BurgerCards.propTypes = {
    ingredients: PropTypes.array.isRequired
}
export default BurgerCards;

