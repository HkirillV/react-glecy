import {configureStore} from "@reduxjs/toolkit";
import productSlice from "@/slices/productSlice.js";

const store = configureStore({
  reducer: {
    product: productSlice
  }
})

export default store