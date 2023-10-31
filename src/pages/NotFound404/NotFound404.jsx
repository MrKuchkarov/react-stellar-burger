import React from 'react';
import {Link} from "react-router-dom";
import rocket from "../../images/NotFound404/rocket.svg"
import found404 from "../../images/NotFound404/404.svg"
import earth from "../../images/NotFound404/earth.svg"
import moon from "../../images/NotFound404/moon.svg"
import astronaut from "../../images/NotFound404/astronaut.svg"
import style from "./NotFound404.module.css";

const NotFound404 = () => {
    return (
        <>
            <div className={`${style["bg-purple"]}`}>

                <div className={`${style["stars"]}`}>
                    <div className={`${style["custom-navbar"]}`}>
                        <div className={`${style["navbar-links"]}`}>
                            <ul className={`${style["nav-links-list"]}`}>
                                <li className={`${style["nav-links"]}`}>
                                    <Link
                                        className={`${style["nav-link"]}`}
                                        to="/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Home
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={`${style["central-body"]}`}>
                        <img
                            className={`${style["image-404"]}`}
                            src={found404}
                            alt="Страница которая показывает картинку found404"
                        />
                        <Link
                            to="/"
                            className={`${style["btn-go-home"]}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            GO BACK HOME
                        </Link>
                    </div>
                    <div className={`${style["objects"]}`}>
                        <img
                            className={`${style["object_rocket"]}`}
                            src={rocket}
                            alt="Картинка из страницы 404 с изображение rocket"
                        />
                        <div className={`${style["earth-moon"]}`}>
                            <img
                                className={`${style["object_earth"]}`}
                                src={earth}
                                alt="Картинка земли которая находится в странице 404"
                            />
                            <img
                                className={`${style["object_moon"]}`}
                                src={moon}
                                alt="Картинка луны которая находится в странице 404"
                            />
                        </div>
                        <div className={`${style["box_astronaut"]}`}>
                            <img
                                className={`${style["object_astronaut"]}`}
                                src={astronaut}
                                alt="Картинка астронавта который находится в странице 404"
                            />
                        </div>
                    </div>
                    <div className={`${style["glowing_stars"]}`}>
                        <div className={`${style["star"]}`}></div>
                        <div className={`${style["star"]}`}></div>
                        <div className={`${style["star"]}`}></div>
                        <div className={`${style["star"]}`}></div>
                        <div className={`${style["star"]}`}></div>

                    </div>

                </div>

            </div>
        </>
    )
};

export default NotFound404;