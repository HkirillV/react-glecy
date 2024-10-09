import {configureStore} from "@reduxjs/toolkit";
import productSlice from "@/slices/catalogSlice.js";
import basketSlice from "@/slices/basketSlice.js";

const store = configureStore({
  reducer: {
    catalog: productSlice,
    basket: basketSlice,
  }
})

export default store