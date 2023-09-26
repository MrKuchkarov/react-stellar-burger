import React from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import IngredientDataLoader from './components/IngredientDataLoader';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { setIngredients } from '../../services/ingredientsSlice/ingredientsSlice';
function App() {
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const isLoading = useSelector((state) => state.ingredients.isLoading);
  const error = useSelector((state) => state.ingredients.error);
  const dispatch = useDispatch();
  
  // Колбэк для обработки успешной загрузки данных
  const handleDataLoaded = useCallback((data) => {
    // Устанавливаем загруженные ингредиенты в Redux store
    dispatch(setIngredients(data));
  }, [dispatch]);

  // Колбэк для обработки ошибки загрузки данных
  const handleError = useCallback((errorMessage) => {
    // Устанавливаем ошибку в Redux store
    dispatch(error(errorMessage));
  }, [dispatch]);
  
  return (
    <section className={styles['app']}>
      <AppHeader />
      <div className={styles['app-container']}>
        <IngredientDataLoader onDataLoaded={handleDataLoaded} onError={handleError}/>
        <div>
          {isLoading && <p>Загрузка...</p>}
          {!isLoading && ingredients.length === 0 && <p>Ингредиенты не доступны</p>}
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
