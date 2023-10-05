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