import {DropTargetMonitor, useDrag, useDrop} from "react-dnd";
import {moveCard} from "../services/constructorSlice/constructorSlice";
import {useRef} from "react";

// Drop function for sorting ingredients
import {useAppDispatch} from "../services/store/store";

type TDropItem = {
    index: number;
};
export const useDropLogic = (index: number) => {
    const dispatch = useAppDispatch();
    const ref = useRef<HTMLLIElement>(null);

    const [{handlerId}, drop] = useDrop({
        accept: "constructor-item",
        collect: (monitor) => ({
            handlerId: monitor.getHandlerId(),
        }),
        hover(item: TDropItem, monitor: DropTargetMonitor) {
            if (!ref.current) {
                return;
            }

            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return;
            }

            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            if (!hoverBoundingRect) {
                return;
            }

            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset!.y - hoverBoundingRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }

            dispatch(moveCard({dragIndex, hoverIndex}));
            item.index = hoverIndex;
        },
    });

    return {handlerId, drop, ref};
};


// Drag function for sorting ingredients
export const useDragLogic = (id: string, index: number) => {

    const ref = useRef<HTMLLIElement>(null);

    const [{isDragging}, drag] = useDrag({
        type: "constructor-item",
        item: () => ({
            id,
            index,
        }),
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return {isDragging, drag, ref};
};


