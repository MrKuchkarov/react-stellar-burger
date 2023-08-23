import React from "react";
import style from "./app-header.module.css";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import HeaderButton from "./components/header-button";

function AppHeader() {
  return (
    <header className={style.header}>
      <div className={style.header__container}>
        <nav className={style.navigation}>
          <ul className={style.menu}>
            <li className={style.menu__items}>
              <BurgerIcon type="primary" />
              <button className={`${style.burger_icon} text text_type_main-default`}>Конструктор</button>
            </li>
            <li className={style.menu__items}>
              <ListIcon type="primary" />
              <button className={`${style.menu_list} text text_type_main-default`}>Лента заказов</button>
            </li>
          </ul>
        </nav>
        <Logo />
        <div className={style.user_container}>
          <ProfileIcon type="primary" />
          <button className={`${style.user_login} text text_type_main-default`}>Личный кабинет</button>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
