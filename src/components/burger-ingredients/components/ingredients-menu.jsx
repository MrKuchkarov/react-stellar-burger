// import React, {useState} from "react";
// import style from "./ingredients-mune.module.css";
// import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
// import {useInView} from 'react-intersection-observer';
//
// const IngredientsMune = () => {
//     const [current, setCurrent] = useState('bun');
//     const scrollToSection = (sectionId) => {
//         const element = document.getElementById(sectionId);
//         if (element) element.scrollIntoView({behavior: "smooth"});
//     };
//     const options = {
//         threshold: 0,
//         delay: 100,
//     };
//
//     const [bunRef, inViewBun] = useInView(options);
//     const [mainRef, inViewMain] = useInView(options);
//     const [sauceRef, inViewSauce] = useInView(options);
//
//     useEffect(() => {
//         if (inViewBun) {
//             setCurrent('bun');
//         } else if (inViewSauce) {
//             setCurrent('sauce');
//         } else if (inViewMain) {
//             setCurrent('main');
//         }
//     }, [inViewBun, inViewMain, inViewSauce]);
//     return (
//         <div className={`${style["ingredients-elements"]} mt-10 mb-10`}>
//             <h1
//                 className={`${style["title-ingredients"]} mb-5 text text_type_main-large`}
//             >
//                 Соберите бургер
//             </h1>
//             <div className={`${style["ingredients-column"]}`}>
//                 <Tab value="bunSection" onClick={scrollToSection} active={current === 'bun'}>
//                     Булка
//                 </Tab>
//                 <Tab value="sauceSection" onClick={scrollToSection} active={current === 'sauce'}>
//                     Соус
//                 </Tab>
//                 <Tab value="mainSection" onClick={scrollToSection} active={current === 'main'}>
//                     Начинка
//                 </Tab>
//             </div>
//         </div>
//     );
// };
// export default IngredientsMune;
