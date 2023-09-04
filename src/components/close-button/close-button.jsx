import React from 'react';
import style from "./close-button.module.css"
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const CloseButton = ({onClick}) => {
    return (
        <button className={`${style["button-close"]} `} onClick={onClick}>
            <CloseIcon type={'primary'}/>
        </button>
    );
};

export default CloseButton;