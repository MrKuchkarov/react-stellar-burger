import React from 'react';
import {Hourglass} from "react-loader-spinner";
import style from "./pre-loader.module.css";
import {useSelector} from "react-redux";
import {selectIngredientsState} from "../../../services/ingredientsSlice/ingredients-selector";

const PreLoader = ({title}) => {
    return (
        <div className={`${style["loader-container"]}`}>
            <h1 className={`${style["loader-title"]} text text_type_main-large`}>
                {title}
            </h1>
            <Hourglass
                visible={true}
                height="80"
                width="80"
                ariaLabel="hourglass-loading"
                wrapperStyle={{}}
                wrapperClass=""
                colors={["#8a2be2", "#d5b3f5"]}
            />
        </div>
    );
};

export default PreLoader;

