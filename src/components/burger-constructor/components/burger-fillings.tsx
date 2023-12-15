import React, {FC, useCallback} from "react";
import {
    ConstructorElement, DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "../burger-constructor.module.css";

import {
    removeOtherIngredient,
} from "../../../services/constructorSlice/constructorSlice";
import {IIngredient} from "../../../types";
import {useAppDispatch} from "../../../services/store/store";
import {useDragLogic, useDropLogic} from "../../../hooks/useDragAndDropSortLogic";

type TBurgerFillings = {
    filling: IIngredient;
    index: number;
}

const BurgerFillings: FC<TBurgerFillings> = ({filling, index}) => {
    const dispatch = useAppDispatch();
    const id = filling._id;

    //Удаление ингредиентов
    const removeIngredient = useCallback(() => {
        dispatch(removeOtherIngredient(filling));
    }, [dispatch, filling]);

    //drop для сортировки ингредиентов
    const {handlerId, drop, ref} = useDropLogic(index);

    //drag для сортировки ингредиентов
    const {isDragging, drag} = useDragLogic(id, index);

    const opacityStyles = {
        opacity: isDragging ? 0 : 1,
        transition: "opacity 0.1s ease-in-out",
    };
    const hoverOpacityStyles = {
        opacity: 0.9,
        transition: "opacity 0.1s ease-in-out",
    };
    drag(drop(ref))

    return (
        <li
            className={`${style["fillings-container"]} mt-4 mb-4`}
            ref={ref}
            style={isDragging ? opacityStyles : hoverOpacityStyles}
            data-handler-id={handlerId}
        >
            <DragIcon type={'primary'}/>
            <ConstructorElement
                isLocked={false}
                text={filling.name}
                thumbnail={filling.image}
                price={filling.price}
                handleClose={() => removeIngredient()}
            />
        </li>
    );
};

export default BurgerFillings;
