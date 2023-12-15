import {RefObject} from "react";

export type TUseScrollGroups = {
    tabsRef: RefObject<HTMLDivElement>;
    bunsRef: RefObject<HTMLUListElement>;
    saucesRef: RefObject<HTMLUListElement>;
    mainsRef: RefObject<HTMLUListElement>;
    setCurrent: (newValue: string) => void;
    current: string;
};
export const useScrollGroups = ({tabsRef, bunsRef, saucesRef, mainsRef, setCurrent, current}: TUseScrollGroups) => {

    return () => {
        const tabsBottom = tabsRef.current?.getBoundingClientRect().bottom;
        const bunsTop = bunsRef.current?.getBoundingClientRect().top;
        const mainsTop = mainsRef.current?.getBoundingClientRect().top;
        const saucesTop = saucesRef.current?.getBoundingClientRect().top;

        if (!tabsBottom || !bunsTop || !saucesTop || !mainsTop) {
            return;
        }
        const bunsDelta = Math.abs(bunsTop - tabsBottom);
        const mainsDelta = Math.abs(mainsTop - tabsBottom);
        const saucesDelta = Math.abs(saucesTop - tabsBottom);

        const min = Math.min(bunsDelta, mainsDelta, saucesDelta);
        const newTab = min === bunsDelta ? "Булки" : min === mainsDelta ? "Начинки" : "Соусы";

        if (newTab !== current) {
            setCurrent(newTab);
        }
    };
};