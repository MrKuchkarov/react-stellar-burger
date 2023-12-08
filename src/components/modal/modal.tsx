import React, {FC, useCallback, useEffect} from "react";
import style from "./modal.module.css";
import ReactDOM from "react-dom";
import CloseButton from "../close-button/close-button";
import ModalOverlay from "../modal-overlay/modal-overlay";


type TModalProps = {
    title: string;
    closeModal: () => void;
}
const modalRoot = document.getElementById("react-modals") as HTMLElement;

const Modal: FC<TModalProps> = ({title, closeModal, children}) => {
    const handleCloseModal = useCallback(() => {
        closeModal();
    }, [closeModal]);

    useEffect(() => {
        const onEscKeydown = (evt: KeyboardEvent) => {
            evt.key === "Escape" && handleCloseModal();
        };

        document.addEventListener("keydown", onEscKeydown);

        return () => {
            document.removeEventListener("keydown", onEscKeydown);
        };
    }, [handleCloseModal]);

    return ReactDOM.createPortal(
        <>
            <div className={style.modal}>
                <section className={`${style["modal-container"]}`}>
                    <header className={`${style["header"]} pt-10 pr-10 pl-10 `}>
                        <h3 className={`${style["title"]} text text_type_main-large`}>{title}</h3>
                        <CloseButton onClick={handleCloseModal}/>
                    </header>
                    {children}
                </section>
            </div>
            <ModalOverlay onClick={handleCloseModal}/>
        </>,
        modalRoot
    );
};

export default Modal;
