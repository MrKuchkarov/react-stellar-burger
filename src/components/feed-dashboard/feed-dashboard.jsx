import React from "react";
import style from "./feed-dashboard.module.css";

const FeedDashboard = () => {
    return (
        <section className={`${style["container"]}`}>
            <div className={`${style["dashboard-status"]}`}>
                <p className={`${style["dashboard-status-title"]} text text_type_main-medium mb-6`}>Готовы:</p>
            </div>
            <div className={`${style[""]}`}>
                <p className={`${style["dashboard-status-title"]} text text_type_main-medium mb-6`}>В работе:</p>
            </div>
        </section>
    );
};

export {FeedDashboard};