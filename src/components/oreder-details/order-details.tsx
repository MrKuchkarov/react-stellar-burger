import React from "react";
import style from "./order-details.module.css";
import done from "../../images/constructor/ingredient item/done.svg";
import {useSelector} from "react-redux";
import {ThreeCircles, ThreeDots} from "react-loader-spinner";
import {selectOrderIsLoading, selectOrderNumber} from "../../services/orderDetailsSlice.js/orderDetails-selector";
import {useAppSelector} from "../../services/store/store";


const OrderDetails = () => {
    const orderNumber = useAppSelector(selectOrderNumber);
    const isLoading = useAppSelector(selectOrderIsLoading);
    return (
        <section className={`${style["order-details"]} `}>
            <h2 className={`${style["title"]} text text_type_digits-large pt-10`}>
                {isLoading ? (
                    <ThreeCircles
                        height="100"
                        width="100"
                        color="#975cbc"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel="three-circles-rotating"
                        outerCircleColor=""
                        innerCircleColor=""
                        middleCircleColor=""
                    />
                ) : (
                    orderNumber || "Номер заказа не указан"
                )}
            </h2>
            <p
                className={`${style["order-number"]} text text_type_main-medium pt-8 pb-15`}
            >
                {isLoading ? "ожидайте идентификатор заказа" : "идентификатор заказа"}
            </p>
            {isLoading ? (
                <ThreeDots
                    height="80"
                    width="80"
                    radius="9"
                    color="#62347f"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    visible={true}
                />
            ) : (
                <img className={`${style["image"]} `} src={done} alt="icon done"/>
            )}
            <p
                className={`${style["order-start"]} text text_type_main-default pt-15 pb-2`}
            >
                {isLoading ?
                    "Мы сообщим вам когда начнем готовить заказ"
                    :
                    "Ваш заказ начали готовить"}

            </p>
            <p className={`${style["order-wait"]} text text_type_main-default pb-30`}>
                {isLoading ?
                    "Ещё немного надо будет подождать"
                    :
                    "Дождитесь готовности на орбитальной станции"}
            </p>
        </section>
    );
};

export default OrderDetails;
