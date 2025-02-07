import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice.js";
import dataSlice from "./dataSlice.js";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    data:dataSlice,
  },
});
export default store;
