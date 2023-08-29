import React from 'react';
import style from "./header-button.module.css"



function HeaderButton({children}) {
  return (
      <a className={`${style.menu_buttons} p-5`}>
        <div className={`${style.menu_text} text text_type_main-default`}>{children}</div>
      </a>
  );
};

export default HeaderButton;