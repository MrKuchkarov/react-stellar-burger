import React, { useCallback, useState } from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import IngredientDataLoader from "./components/IngredientDataLoader";

export const BurgerContext = React.createContext();

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [error, setError] = useState(null);

  const handleDataLoaded = useCallback((data) => {
    setIngredients(data);
  }, []);

  const handleError = useCallback((errorMessage) => {
    setError(errorMessage);
  }, []);

  return (
    <section className={styles["app"]}>
      <BurgerContext.Provider value={{ ingredients }}>
        <AppHeader />
        <div className={styles["app-container"]}>
          <IngredientDataLoader
            onDataLoaded={handleDataLoaded}
            onError={handleError}
          />
          <div>
            {error && <p>{error}</p>}
            {!error && ingredients.length === 0 && (
              <p>Ингредиенты не доступны</p>
            )}
            {ingredients.length > 0 && <BurgerIngredients />}
          </div>
          <div>
            <BurgerConstructor />
          </div>
        </div>
      </BurgerContext.Provider>
    </section>
  );
}

export default App;
