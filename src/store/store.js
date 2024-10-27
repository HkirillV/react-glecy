import {configureStore} from "@reduxjs/toolkit";
import productSlice from "@/slices/catalogSlice";
import basketSlice from "@/slices/basketSlice";
import crumbsSlice from "@/slices/crumbsSlice"

const store = configureStore({
  reducer: {
    catalog: productSlice,
    basket: basketSlice,
    crumbs: crumbsSlice,
  }
})

export default store