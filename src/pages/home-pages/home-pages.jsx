import React from "react";
import styles from "../../../src/components/app/app.module.css";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import IngredientDataLoader from "../../components/app/components/IngredientDataLoader";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";

function HomePages() {

    return (
        <DndProvider backend={HTML5Backend}>
            <div className={styles["app-container"]}>
                <IngredientDataLoader/>
                <BurgerIngredients/>
                <BurgerConstructor/>
            </div>
        </DndProvider>
    );
}

export {HomePages};
