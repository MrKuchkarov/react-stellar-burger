import React from "react";
import style from "./modal-overlay.module.css";
import PropTypes from "prop-types";

const ModalOverlay = ({ onClick }) => {
  return <div className={style.overlay} onClick={onClick}></div>;
};

ModalOverlay.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default ModalOverlay;
