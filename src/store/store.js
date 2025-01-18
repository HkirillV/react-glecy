import {configureStore} from "@reduxjs/toolkit";
import basketSlice from "@/slices/basketSlice";
import crumbsSlice from "@/slices/crumbsSlice";
import catalogSlice from "@/slices/catalogSlice";
import filterSlice from "@/slices/filterSlice";

const store = configureStore({
  reducer: {
    basket: basketSlice,
    crumbs: crumbsSlice,
    catalog: catalogSlice,
    filter: filterSlice,
  }
})

export default store