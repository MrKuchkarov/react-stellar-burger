import React, {FC, useMemo, useState} from "react";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./burger-total-price.module.css";
import Modal from "../../modal/modal";
import OrderDetails from "../../oreder-details/order-details";
import {makeOrder} from "../../../utils/ApiService";
import {selectAuthUser} from "../../../services/auth/auth-selector";
import {useNavigate} from "react-router-dom";
import {selectFillingBun, selectFillingOther} from "../../../services/constructorSlice/constructor-selector";
import TotalPriceBurger from "../../total-price-burger/total-price-burger";
import {useAppDispatch, useAppSelector} from "../../../services/store/store";
import {calculateIngredientsTotalPrice} from "./calculateIngredientsTotalPrice";


type TBurgerTotalPriceProps = {
    isOrderButtonEnabled: boolean | null;
}

const BurgerTotalPrice: FC<TBurgerTotalPriceProps> = ({isOrderButtonEnabled}) => {
    const bunIngredients = useAppSelector(selectFillingBun);
    const otherIngredients = useAppSelector(selectFillingOther);
    const seBun = useAppSelector(selectFillingBun);
    const setOther = useAppSelector(selectFillingOther);
    const isAuthUser = useAppSelector(selectAuthUser);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [totalModal, setTotalModal] = useState(false);
    const handleOpenModal = () => {
        // If the button is not available or the user is not logged in, the user is redirected to the login page
        if (!isOrderButtonEnabled || !isAuthUser) {
            if (!isAuthUser) {
                navigate("/login");
            }
            return;
        }

        const ingredientIds: string[] = otherIngredients.map((ingredient) => ingredient._id);
        // Checking bunIngredients if it is present, i add bunIngredients._id to the array twice, at the beginning and end
        if (bunIngredients) {
            ingredientIds.unshift(bunIngredients._id);
            ingredientIds.push(bunIngredients._id);
        }
        // Если пользователь авторизован
        dispatch(makeOrder(ingredientIds));
        setTotalModal(true);
    };
    const handleCloseModal = () => {
        setTotalModal(false);
    };

    // Checking if there is a selected bun and other ingredients
    const bun = seBun || null;
    const otherIngredientsMemo = useMemo(() => setOther || [], [setOther]);

    // Getting the upper and lower buns
    const topBun = bun;
    const bottomBun = bun;

    // Calculating the total cost of ingredients
    const ingredientsTotalPrice = useMemo(() => {
        return calculateIngredientsTotalPrice({topBun, bottomBun, otherIngredients: otherIngredientsMemo});
    }, [topBun, bottomBun, otherIngredientsMemo]);

    return (
        <div>
            <div className={`${style["total-price-container"]} mt-10`}>
                <TotalPriceBurger sum={ingredientsTotalPrice} bigPrice={true}/>
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
