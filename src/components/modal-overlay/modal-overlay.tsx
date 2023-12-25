import React, {FC, MouseEventHandler} from "react";
import style from "./modal-overlay.module.css";

type TModalOverlayProps = {
    onClick: MouseEventHandler<HTMLDivElement> | undefined
}
const ModalOverlay: FC<TModalOverlayProps> = ({onClick}) => {
    return <div className={style.overlay} onClick={onClick}></div>;
};

export default ModalOverlay;
