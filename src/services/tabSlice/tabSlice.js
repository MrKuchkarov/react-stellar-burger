// import {createSlice} from "@reduxjs/toolkit";
//
// const initialState = {
//     // ... другие поля состояния
//     activeSectionBun: "bunSection",
//     activeSectionSauce: "sauceSection",
//     activeSectionMain: "mainSection",
// };
//
// const tabSlice = createSlice({
//     name: "tabTitles",
//     initialState,
//     reducers: {
//         // ... другие редукторы
//         activeSectionBun: (state, action) => {
//             state.activeSectionBun = action.payload;
//         },
//         activeSectionSauce: (state, action) => {
//             state.activeSectionSauce = action.payload;
//         },
//         activeSectionMain: (state, action) => {
//             state.activeSectionMain = action.payload;
//         },
//     },
// });
//
// // ... экспорт редуктора и экшенов
// export const {activeSectionBun, activeSectionSauce, activeSectionMain} = tabSlice.actions;
// export default tabSlice.reducer;


// const HandleScrollGrupp = () => {
//     const bunsRef = useRef(null);
//     const saucesRef = useRef(null);
//     const tabsRef = useRef(null);
//     const mainsRef = useRef(null);
//
//     const tabsBottom = tabsRef.current?.getBoundingClientRect().bottom;
//     const bunsTop = bunsRef.current?.getBoundingClientRect().top;
//     const saucesTop = saucesRef.current?.getBoundingClientRect().top;
//     const mainsTop = mainsRef.current?.getBoundingClientRect().top;
//
//     if (!tabsBottom || !bunsTop || !saucesTop || !mainsTop) {
//         return;
//     }
//     const bunsDelta = Math.abs(bunsTop = tabsBottom);
//     const saucesDelta = Math.abs(saucesTop = tabsBottom);
//     const mainsDelta = Math.abs(mainsTop = tabsBottom);
//
//     const min = Math.min(bunsDelta, saucesDelta, mainsDelta);
//
//     const newTab = min === bunsDelta ? "bun" : min === saucesDelta ? "sauce" : "main";
//     if (newTab !== currentTab) {
//         dispatch(switchTab(newTab))
//     }
// }