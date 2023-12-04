import React from 'react';
import style from "./image-list.module.css";
import {Counter} from "@ya.praktikum/react-developer-burger-ui-components";

const ImageList = ({ingredientsWithInfo}) => {
    return (
        <ul className={`${style["list-ingredient"]}`}>
            {ingredientsWithInfo.slice(0, 6).map((obj, index) =>
                index < 5 ? (
                    <li
                        key={obj._id}
                        style={{zIndex: 6 - index}}
                        className={`${style["ingredients-item"]}`}
                    >
                        {obj.count > 1 && (
                            <Counter
                                extraClass={`${style["ingredients-counter"]}`}
                                count={obj.count}
                                size={"small"}
                            />
                        )}

                        <img
                            className={`${style["ingredients-image"]}`}
                            src={obj.image_mobile}
                            alt={obj.name}
                        />
                    </li>
                ) : (
                    <li
                        key={obj._id}
                        className={`${style["ingredients-item"]}`}
                    >
                        <img
                            className={`${style["ingredients-image-fin"]}`}
                            src={obj.image_mobile}
                            alt={obj.name}
                        />
                        {ingredientsWithInfo.length > 6 && (
                            <span
                                className={`${style["ingredients-overlay-text"]} text text_type_digits-default`}
                            >
                +{ingredientsWithInfo.length - 6}
              </span>
                        )}
                    </li>
                ),
            )}
        </ul>
    );
};

export {ImageList};