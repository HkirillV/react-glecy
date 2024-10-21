import {configureStore} from "@reduxjs/toolkit";
import productSlice from "@/slices/catalogSlice";
import basketSlice from "@/slices/basketSlice";

const store = configureStore({
  reducer: {
    catalog: productSlice,
    basket: basketSlice,
  }
})

export default store