import React, {FC, MouseEventHandler} from 'react';
import style from "./close-button.module.css"
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";

type CloseButtonProps = {
    onClick: MouseEventHandler<HTMLButtonElement> | undefined
}
const CloseButton: FC<CloseButtonProps> = ({onClick}) => {

    return (
        <button className={`${style["button-close"]}`} onClick={onClick}>
            <CloseIcon type={'primary'}/>
        </button>
    );
};

export default CloseButton;