import React from "react";
import style from "./order-cards.module.css";
import {Link, useLocation} from "react-router-dom";
import {ImageList} from "./component/image-list";
import {FormattedDate} from "@ya.praktikum/react-developer-burger-ui-components";

const OrderCards = () => {
    const location = useLocation();
    return (
        <li className={`${style[""]} `}>
            <Link
                className={`${style[""]} `}
                // to={`${location.pathname}/${_id}`}
                // state={{background: location}}
            >
                <div className={`${style[""]} `}>
                    <p>

                    </p>
                    <FormattedDate date={new Date()}/>
                </div>
                <div className={`${style[""]} `}>
                    <p>

                    </p>
                    <p>

                    </p>
                </div>
                <div className={`${style[""]} `}>
                    <ImageList/>
                    <span className={`${style[""]} `}>

                    </span>
                </div>
            </Link>
        </li>
    );
};

export {OrderCards};