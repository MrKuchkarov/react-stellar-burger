import React, { useState } from "react";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./burger-total-price.module.css";
import iconPrice from "../../../images/constructor/icon 36x36.svg";
import Modal from "../../modal/modal";
import OrderDetails from "../../oreder-details/order-details";
import PropTypes from "prop-types";
import makeOrder from "../../../utils/ApiService";
import { BurgerContext } from "../../../index";

const BurgerTotalPrice = ({ totalPrice }) => {
  //Контекст все ингредиентов
  const { ingredients } = React.useContext(BurgerContext);
  const [totalModal, setTotalModal] = useState(false);
  //Состояние номера заказов
  const [orderNumber, setOrderNumber] = useState(null);

  const handleOpenModal = async () => {
    try {
      const ingredientIds = ingredients.map((ingredient) => ingredient._id);
      const number = await makeOrder(ingredientIds);
      setOrderNumber(number);
      setTotalModal(true);
    } catch (error) {
      console.error("Ошибка при оформлении заказа:", error);
    }
  };

  const handleCloseModal = () => {
    setTotalModal(false);
  };

  return (
    <div>
      <div className={`${style["total-price-container"]} mt-10`}>
        <div className={`${style["total-price"]}`}>
          <span className={"text text_type_digits-medium"}>{totalPrice}</span>
          <img src={iconPrice} alt="Иконка ценны ингредиентов" />
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
          <OrderDetails orderNumber={orderNumber} />
        </Modal>
      )}
    </div>
  );
};

BurgerTotalPrice.propTypes = {
  totalPrice: PropTypes.number.isRequired,
};
export default BurgerTotalPrice;
