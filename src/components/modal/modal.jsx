import React, {useEffect} from 'react';
import  style from "./modal.module.css"
import ReactDOM from "react-dom";
import CloseButton from "../close-button/close-button";
import ModalOverlay from "../modal-overlay/modal-overlay";

const modalRoot = document.getElementById('react-modals');
const Modal = ({ title, closeModal, children }) => {
    useEffect(() => {
        const onEscKeydown = (evt) => {
            evt.key === 'Escape' && closeModal();
        };

        document.addEventListener('keydown', onEscKeydown);

        return () => {
            document.removeEventListener('keydown', onEscKeydown);
        };
    }, []);
    return ReactDOM.createPortal(
        <>
            <div className={style.modal}>
                <section className={`${style["modal-container"]}`}>
                    <header className={`${style["header"]} pt-10 pr-10 pl-10 `}>
                        <h3 className={`text text_type_main-large`}>{title}</h3>
                        <CloseButton onClick={closeModal} />
                    </header>
                    {children}
                </section>
            </div>
            <ModalOverlay onClick={closeModal} />
        </>,
        modalRoot,
    );
};

export default Modal;