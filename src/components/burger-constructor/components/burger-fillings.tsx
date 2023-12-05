import React, {FC, useCallback, useRef} from "react";
import {
    ConstructorElement, DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "../burger-constructor.module.css";

import {
    moveCard, removeOtherIngredient,
} from "../../../services/constructorSlice/constructorSlice";
import {useDispatch} from "react-redux";
import {DropTargetMonitor, useDrag, useDrop} from "react-dnd";
import {IIngredient} from "../../../types";

type TBurgerFillings = {
    filling: IIngredient;
    index: number;
}

const BurgerFillings: FC<TBurgerFillings> = ({filling, index}) => {
    const dispatch = useDispatch();
    const ref = useRef<HTMLLIElement>(null);
    const id = filling._id;

    //Удаление ингредиентов
    const removeIngredient = useCallback(() => {
        dispatch(removeOtherIngredient(filling));
    }, [dispatch, filling]);

    //drop для сортировки ингредиентов
    const [{handlerId}, drop] = useDrop({
        accept: 'constructor-item',
        collect: (monitor) => ({
            handlerId: monitor.getHandlerId(),
        }), hover(item: any, monitor: DropTargetMonitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index
            if (dragIndex === hoverIndex) {
                return
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            if (!hoverBoundingRect) {
                return;
            }
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const clientOffset = monitor.getClientOffset();
            // @ts-ignore
            const hoverClientY = clientOffset.y - hoverBoundingRect.top
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }
            dispatch(moveCard({dragIndex, hoverIndex}))
            item.index = hoverIndex
        },
    });

    //drag для сортировки ингредиентов
    const [{isDragging}, drag] = useDrag({
        type: 'constructor-item', item: () => {
            return {id, index}
        }, collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })
    const opacityStyles = {
        opacity: isDragging ? 0 : 1,
        transition: 'opacity 0.1s ease-in-out',
    };
    const hoverOpacityStyles = {
        opacity: 0.4,
        transition: 'opacity 0.1s ease-in-out',
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
