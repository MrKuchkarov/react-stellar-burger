import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import Modal from "../modal/modal";
import {fetchIngredients} from "../../utils/ApiService";

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchIngredients(); // Вызываем функцию для запроса

        setIngredients(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchData(); // Вызываем функцию при монтировании компонента
  }, []);

  const showLoading = isLoading;
  const showIngredients = !isLoading && ingredients.length > 0;
  const showNoIngredients = !isLoading && ingredients.length === 0;


  return (
      <section className={styles["app"]}>
        <Modal title={"Детали ингредиентов"}>

        </Modal>
        <AppHeader />
        <div className={styles["app-container"]}>
          <div>
            {showLoading && <p>Загрузка...</p>}
            {showIngredients && <BurgerIngredients ingredients={ingredients} />}
            {showNoIngredients && <p>Ингредиенты не доступны</p>}
          </div>
          <div>
            <BurgerConstructor ingredients={ingredients} />
          </div>
        </div>
      </section>
  );
}

export default App;
