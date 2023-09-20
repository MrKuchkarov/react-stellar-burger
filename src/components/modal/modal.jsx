import React, { useCallback, useEffect } from "react";
import style from "./modal.module.css";
import ReactDOM from "react-dom";
import CloseButton from "../close-button/close-button";
import ModalOverlay from "../modal-overlay/modal-overlay";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("react-modals");

const Modal = ({ title, closeModal, children }) => {
  const handleCloseModal = useCallback(() => {
    closeModal();
  }, [closeModal]);

  useEffect(() => {
    const onEscKeydown = (evt) => {
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
            <h3 className={`text text_type_main-large`}>{title}</h3>
            <CloseButton onClick={handleCloseModal} />
          </header>
          {children}
        </section>
      </div>
      <ModalOverlay onClick={handleCloseModal} />
    </>,
    modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Modal;
