import React from "react";
import style from "./order-details.module.css";
import done from "../../images/constructor/ingredient item/done.svg";
import PropTypes from "prop-types";

const OrderDetails = ({ orderNumber }) => {
  return (
    <section className={`${style["order-details"]} `}>
      <h2 className={`${style["title"]} text text_type_digits-large pt-10`}>
        {orderNumber || "Номер заказа не указан"}
      </h2>
      <p
        className={`${style["order-number"]} text text_type_main-medium pt-8 pb-15`}
      >
        идентификатор заказа
      </p>
      <img className={`${style["image"]} `} src={done} alt="icon done" />
      <p
        className={`${style["order-start"]} text text_type_main-default pt-15 pb-2`}
      >
        Ваш заказ начали готовить
      </p>
      <p className={`${style["order-wait"]} text text_type_main-default pb-30`}>
        Дождитесь готовности на орбитальной станции
      </p>
    </section>
  );
};

OrderDetails.propTypes = {
  orderNumber: PropTypes.number.isRequired,
};
export default OrderDetails;
