import {DropTargetMonitor, useDrag, useDrop} from "react-dnd";
import {moveCard} from "../../../services/constructorSlice/constructorSlice";
import {Dispatch, useRef} from "react";

//drop для сортировки ингредиентов
export const useDropLogic = (index: number, dispatch: Dispatch<any>) => {
    const ref = useRef<HTMLLIElement>(null);
    return useDrop({
        accept: "constructor-item",
        collect: (monitor) => ({
            handlerId: monitor.getHandlerId(),
        }),
        hover(item: any, monitor: DropTargetMonitor) {
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
};

//drag для сортировки ингредиентов
export const useDragLogic = (id: string, index: number) => {
    return useDrag({
        type: 'constructor-item',
        item: () => {
            return {id, index};
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
};


