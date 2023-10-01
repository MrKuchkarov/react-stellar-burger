import React from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import IngredientDataLoader from "./components/IngredientDataLoader";
import { useSelector } from "react-redux";

function App() {
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const isLoading = useSelector((state) => state.ingredients.isLoading);

  return (
    <section className={styles["app"]}>
      <AppHeader />
      <div className={styles["app-container"]}>
        <IngredientDataLoader />
        <div>
          {isLoading && <p>Загрузка...</p>}
          {!isLoading && ingredients.length === 0 && (
            <p>Ингредиенты не доступны</p>
          )}
          {ingredients.length > 0 && <BurgerIngredients />}
        </div>
        <div>
          <BurgerConstructor />
        </div>
      </div>
    </section>
  );
}

export default App;
