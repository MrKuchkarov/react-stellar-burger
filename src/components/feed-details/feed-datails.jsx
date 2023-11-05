import React from 'react';
import style from "./feed-details.module.css";
import {CurrencyIcon, FormattedDate} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectFeedById} from "../../services/webSocketSlice/ws-selector";
import {useStatus} from "../../hooks/useStatus";
import {useSocket} from "../../hooks/useSocket";
import useIngredientInfo from "../../hooks/IngredientInfo";

const FeedDetails = ({isModal}) => {
    const {id} = useParams()
    const currentFeed = useSelector(selectFeedById(id))
    const status = useStatus(currentFeed.status)
    useSocket()
    const ingredientsWithInfo = useIngredientInfo(currentFeed.ingredients)
    return (
        currentFeed && (
            <section className={`${style["container-feed-details"]} `}>
                <p
                    className={`${style["order-number"]} text text_type_digits-default`}
                >
                    #{currentFeed.number}
                </p>
                <h1
                    className={`${style["title-ingredients"]} text text_type_main-medium`}
                >
                    {currentFeed.name}
                </h1>
                <p
                    className={`${style["burger-status"]} text text_type_main-default`}
                >
                    {status}
                </p>
                <h2
                    className={`${style["composition-burger"]} text text_type_main-medium`}
                >
                    Состав:
                </h2>

                <ul className={`${style["lists"]} custom-scroll`}>
                    {ingredientsWithInfo.map((ingredient) => (
                        <Link
                            to={`/ingredients/${ingredient._id}`}
                            className={`${style["feed-link"]} `}
                            key={ingredient._id}
                        >
                            <li
                                className={`${style["list-ingredients"]} `}>
                                <img
                                    className={`${style["image-ingredients"]} `}
                                    src={ingredient.image_mobile}
                                    alt={ingredient.name}
                                />
                                <p className={`${style["name-ingredients"]} text text_type_main-default`}
                                >
                                    {ingredient.name}
                                </p>
                                <span
                                    className={`${style["ingredients-price"]} text text_type_digits-default`}
                                >
                        6969
                        <CurrencyIcon type={'primary'}/>
                            </span>
                            </li>
                        </Link>
                    ))}
                </ul>
                <div className={`${style["footer"]} `}>
                    <FormattedDate
                        date={new Date()}
                        className={`text text_type_main-default text_color_inactive`}
                    />
                    <span className={`${style["ingredients-price"]} text text_type_digits-default`}>
                        6969
                        <CurrencyIcon type={'primary'}/>
                    </span>
                </div>
            </section>
        )
    );
};

export {FeedDetails};