import React, {useState} from "react";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./burger-total-price.module.css";
import Modal from "../../modal/modal";
import OrderDetails from "../../oreder-details/order-details";
import {makeOrder} from "../../../utils/ApiService";
import {useSelector, useDispatch} from "react-redux";
import {selectAuthUser} from "../../../services/auth/auth-selector";
import {useNavigate} from "react-router-dom";
import {clearIngredients} from "../../../services/constructorSlice/constructorSlice";
import {selectFillingBun, selectFillingOther} from "../../../services/constructorSlice/constructor-selector";
import TotalPriceBurger from "../../total-price-burger/total-price-burger";


const BurgerTotalPrice = ({totalPrice, isOrderButtonEnabled}) => {
    const bunIngredients = useSelector(selectFillingBun);
    const otherIngredients = useSelector(selectFillingOther);
    const dispatch = useDispatch();
    const isAuthUser = useSelector(selectAuthUser);
    const navigate = useNavigate();
    const [totalModal, setTotalModal] = useState(false);

    const handleOpenModal = () => {
        const ingredientIds = otherIngredients.map((ingredient) => ingredient._id);

        if (bunIngredients) {
            ingredientIds.unshift(bunIngredients._id);
            ingredientIds.push(bunIngredients._id);
        }

        if (!isOrderButtonEnabled) {
            // Если кнопка "Оформить заказ" отключена, выполняется это
            return;
        }

        // Проверю, авторизован ли пользователь
        if (!isAuthUser) {
            // Если не авторизован, перенаправляю на маршрут /login
            navigate("/login");
            return;
        }

        // Если пользователь авторизован
        dispatch(makeOrder(ingredientIds));
        setTotalModal(true);
        // Не сбрасываем состояние ингредиентов, а сбрасиваем после заказа
        dispatch(clearIngredients())
    };

    const handleCloseModal = () => {
        setTotalModal(false);
    };


    return (
        <div>
            <div className={`${style["total-price-container"]} mt-10`}>
                <TotalPriceBurger sum={totalPrice} bigPrice={true}/>
                <Button
                    htmlType="button"
                    type="primary"
                    size="large"
                    onClick={handleOpenModal}
                    disabled={!isOrderButtonEnabled}
                >
                    {isAuthUser ? "Оформить заказ" : "Войдите(чтобы сделать заказ)"}
                </Button>
            </div>
            {totalModal && (
                <Modal closeModal={handleCloseModal} title={""}>
                    <OrderDetails/>
                </Modal>
            )}
        </div>
    );
};

export default BurgerTotalPrice;
