import styles from "../../../src/components/app/app.module.css";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";

function HomePages() {
    return (
        <DndProvider backend={HTML5Backend}>
            <div className={styles["app-container"]}>
                <BurgerIngredients/>
                <BurgerConstructor/>
            </div>
        </DndProvider>
    );
}

export {HomePages};
