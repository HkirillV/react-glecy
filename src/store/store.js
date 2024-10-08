import {configureStore} from "@reduxjs/toolkit";
import productSlice from "@/slices/productSlice.js";
import basketSlice from "@/slices/basketSlice.js";

const store = configureStore({
  reducer: {
    product: productSlice,
    basket: basketSlice,
  }
})

export default store