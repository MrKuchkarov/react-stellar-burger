import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIngredients } from '../../../utils/ApiService';
import PropTypes from 'prop-types';

function IngredientDataLoader({ onDataLoaded }) {
  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const error = useSelector((state) => state.ingredients.error);
  const isLoading = useSelector((state) => state.ingredients.isLoading);

  useEffect(() => {
    dispatch(fetchIngredients())
      .unwrap()
      .then((data) => {
        onDataLoaded(data);
      });
  }, [dispatch, onDataLoaded]);

  if (isLoading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // Если данные успешно загружены, можно передать их обратно в родительский компонент
  // через колбэк onDataLoaded(data)
  
  return null;
}

IngredientDataLoader.propTypes = {
  onDataLoaded: PropTypes.func.isRequired,
};

export default IngredientDataLoader;
