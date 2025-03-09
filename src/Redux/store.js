import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice.js";
import dataSlice from "./dataSlice.js";
import productSlice from "./productSlice.js";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    data: dataSlice,
    products: productSlice,
  },
});
export default store;
