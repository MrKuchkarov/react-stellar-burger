import React, { useEffect, useState } from "react";
import { fetchIngredients } from "../../../utils/ApiService";
import PropTypes from "prop-types";

function IngredientDataLoader({ onDataLoaded, onError }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchIngredients();
                onDataLoaded(data);
                setIsLoading(false);
            } catch (err) {
                onError(err.message);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [onDataLoaded, onError]);

    return isLoading ? <p>Загрузка...</p> : null;
}

IngredientDataLoader.propTypes = {
    onDataLoaded: PropTypes.func.isRequired
}
export default IngredientDataLoader;