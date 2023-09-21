import React, { useState } from "react";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./burger-total-price.module.css";
import iconPrice from "../../../images/constructor/icon 36x36.svg";
import Modal from "../../modal/modal";
import OrderDetails from "../../oreder-details/order-details";
import PropTypes from "prop-types";


const BurgerTotalPrice = ({ totalPrice }) => {
  const [totalModal, setTotalModal] = useState(false);

  const handleOpenModal = () => {
    setTotalModal(true);
  };

  const handleCloseModal = () => {
    setTotalModal(false);
  };
  return (
    <div>
      <div className={`${style["total-price-container"]} mt-10`}>
        <div className={`${style["total-price"]}`}>
          <span className={"text text_type_digits-medium"}>{totalPrice}</span>
          <img src={iconPrice} alt="" />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={handleOpenModal}
        >
          Нажми на меня
        </Button>
      </div>
      {totalModal && (
        <Modal closeModal={handleCloseModal} title={""}>
          <OrderDetails></OrderDetails>
        </Modal>
      )}
    </div>
  );
};


// BurgerTotalPrice.propTypes = {
//   ingredientsTotalPrice: PropTypes.number.isRequired,
// };
export default BurgerTotalPrice;
