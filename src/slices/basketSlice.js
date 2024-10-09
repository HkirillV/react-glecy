import {createSlice} from '@reduxjs/toolkit';

const initialState = []

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload)
    },
    deleteProduct: (state, action) => {
      return state.filter(product => product.id !== action.payload)
    }
  }
})

export const {addProduct, deleteProduct} = basketSlice.actions;

export default basketSlice.reducer;