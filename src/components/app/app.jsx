import React, { useCallback, useState } from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import IngredientDataLoader from "./components/IngredientDataLoader";
import { BurgerContext } from "../..";

function App() {
  const [error, setError] = useState(null);
  const { ingredients, setIngredients } = React.useContext(BurgerContext);

  const handleDataLoaded = useCallback((data) => {
    setIngredients(data);
  }, []);

  const handleError = useCallback((errorMessage) => {
    setError(errorMessage);
  }, []);

  return (
    <section className={styles["app"]}>
      <AppHeader />
      <div className={styles["app-container"]}>
        <IngredientDataLoader
          onDataLoaded={handleDataLoaded}
          onError={handleError}
        />
        <div>
          {error && <p>{error}</p>}
          {!error && ingredients.length === 0 && <p>Ингредиенты не доступны</p>}
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
