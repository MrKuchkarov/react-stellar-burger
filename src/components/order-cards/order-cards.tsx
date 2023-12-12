import React, {FC} from "react";
import style from "./order-cards.module.css";
import {Link, useLocation} from "react-router-dom";
import {ImageList} from "./component/image-list";
import {CurrencyIcon, FormattedDate} from "@ya.praktikum/react-developer-burger-ui-components";
import useIngredientInfo from "../../hooks/useIngredientInfo";
import {useStatus} from "../../hooks/useStatus";
import {IWebSocketOrder} from "../../types/web-socket";

const OrderCards: FC<IWebSocketOrder> = (props) => {
    const {
        _id,
        name,
        number,
        status,
        ingredients: ingredientsId,
        createdAt,
        showStatus,
    } = props;
    const location = useLocation();
    const ingredientsWithInfo = useIngredientInfo(ingredientsId);
    const uzStatus = useStatus(status);
    // Проверяю, что ingredientsWithInfo не равно null
    if (ingredientsWithInfo === null) {
        return null;
    }

    const burgerPrice = ingredientsWithInfo.reduce(
        (acc, ingredient) => acc + ingredient.price * ingredient.count,
        0,
    );
    const color_success = status === "done" ? "text_color_success" : "";
    return (
        <li className={`${style["list-container"]} custom-scroll`}>
            <Link
                className={`${style["list-link"]} `}
                to={`${location.pathname}/${_id}`}
                state={{background: location}}
            >
                <div className={`${style["burger-id-data"]} `}>
                    <p className={`${style["burger-id"]} text text_type_digits-default`}
                    >
                        {`#${number}`}
                    </p>
                    <FormattedDate
                        date={new Date(createdAt)}
                        className={`text text_type_main-default text_color_inactive`}
                    />
                </div>
                <div className={`${style["burger-name-container"]} `}>
                    <p className={`${style[""]} text text_type_main-medium`}>{name}</p>
                    {showStatus && (
                        <p className={`${style[""]} text text_type_main-default mt-2 ${color_success}`}>
                            {uzStatus}
                        </p>
                    )}
                </div>
                <div className={`${style["burger-ingredients"]} `}>
                    <ImageList ingredientsWithInfo={ingredientsWithInfo}/>
                    <span className={`${style["burger-price"]} text text_type_digits-default`}>
                        {burgerPrice}
                        <CurrencyIcon type={'primary'}/>
                    </span>
                </div>
            </Link>
        </li>
    );
};


export {OrderCards};