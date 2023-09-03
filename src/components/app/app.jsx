import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
const ApiUrl = "https://norma.nomoreparties.space/api/ingredients"
function App() {
  const [ingredients, setIngredients] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Функция для выполнения запроса к API
    const fetchIngredients = async () => {
      try {
        const response = await fetch(ApiUrl);

        if (!response.ok) {
          throw new Error('Ошибка при запросе к API');
        }

        const result = await response.json();

        // Проверяем, что result - объект с полем "data", которое является массивом
        if (result && result.success && Array.isArray(result.data)) {
          setIngredients(result.data);
          setIsLoading(false);
        } else {
          throw new Error('Неверный формат данных');
        }
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    // Вызов функции при монтировании компонента
    fetchIngredients();
  }, []);
  const showLoading = isLoading;
  const showIngredients = !isLoading && ingredients.length > 0;
  const showNoIngredients = !isLoading && ingredients.length === 0;

  return (
      <section className={styles["app"]}>
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
