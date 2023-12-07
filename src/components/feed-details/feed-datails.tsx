import React, {FC, useMemo} from 'react';
import style from "./feed-details.module.css";
import {FormattedDate} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectFeedById} from "../../services/webSocketSlice/AuthSocketSlice/auth-ws-selector";
import {useStatus} from "../../hooks/useStatus";
import useIngredientInfo from "../../hooks/useIngredientInfo";
import TotalPriceBurger from "../total-price-burger/total-price-burger";

import {selectFeedByUnId} from "../../services/webSocketSlice/UnAuthSocketSlice/unauth-ws-selector";
import {useAppSelector} from "../../services/store/store";

interface FeedDetailsProps {
    useFeedDetails?: boolean;
}

const FeedDetails: FC<FeedDetailsProps> = ({useFeedDetails}) => {
    const {id} = useParams<{ id?: string }>();
    const currentFeed = useAppSelector(useFeedDetails ? selectFeedById(id || "") : selectFeedByUnId(id || ""));
    const status = useStatus(currentFeed ? currentFeed.status : null);
    const ingredientsWithInfo = useIngredientInfo(currentFeed ? currentFeed.ingredients : null);

    const ingredientsTotalPrice = useMemo(() => {
        return ingredientsWithInfo.reduce(
            (acc, ingredient) => acc + ingredient.price * ingredient.count,
            0,
        );
    }, [ingredientsWithInfo]);

    const status_color_success = currentFeed && currentFeed.status === "done" ? "text_color_success" : "";


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
                    className={`${style["burger-status"]} text text_type_main-default ${status_color_success}`}
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
                            // to={`${location.pathname}/${ingredient._id}`}
                            // state={{background: location}}
                            className={`${style["feed-link"]} `}
                            key={ingredient._id}
                        >
                            <li
                                className={`${style["list-ingredients"]} `}>
                                <div className={`${style["list-ingredients"]} `}>
                                    <img
                                        className={`${style["image-ingredients"]} `}
                                        src={ingredient.image_mobile}
                                        alt={ingredient.name}
                                    />
                                    <p className={`${style["name-ingredients"]} text text_type_main-default`}
                                    >
                                        {ingredient.name}
                                    </p>
                                </div>

                                <TotalPriceBurger sum={ingredient.price} count={ingredient.count}/>
                            </li>
                        </Link>
                    ))}
                </ul>
                <div className={`${style["footer"]} `}>
                    <FormattedDate
                        date={new Date()}
                        className={`text text_type_main-default text_color_inactive`}
                    />
                    <TotalPriceBurger sum={ingredientsTotalPrice}/>
                </div>
            </section>
        )
    ) || null;
};

export {FeedDetails};