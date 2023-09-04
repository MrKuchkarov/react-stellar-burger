import React from 'react';
import style from "./modal-overlay.module.css"

const ModalOverlay = ({onClick}) => {
    return (
        <div className={style.overlay} onClick={onClick}>

        </div>
    );
};

export default ModalOverlay;