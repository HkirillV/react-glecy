import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  products: []
}

const productSlice = createSlice(
  {
    name: "product",
    initialState,
    reducers: {
      setProduct: (state, action) => {
        return [...action.payload]
      }
    }
  }
)

export const {setProduct} = productSlice.actions;

export default productSlice.reducer;