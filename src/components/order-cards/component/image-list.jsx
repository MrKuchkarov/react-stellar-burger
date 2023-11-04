import React from 'react';
import style from "./image-list.module.css";

const ImageList = () => {
    return (
        <ul className={`${style["image-list"]} `}>
            <li className={`${style["images"]} `}>
                Картинка ингредиентов Картинка ингредиентов Картинка ингредиентов
            </li>
        </ul>
    );
};

export {ImageList};