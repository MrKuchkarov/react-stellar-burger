import React from "react";
import styles from "./app.module.css";
import { data } from "../../utils/data";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";


function App() {
  return (
    <div className={styles.app}>
    <AppHeader />
      <div className={styles.container}>
      <div>
    <BurgerIngredients />
      </div>
      <div>
        <BurgerConstructor />
      </div>
      </div>
    </div>

  );
}

export default App;
