import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  basket: [
    {
      "title": "Бабл-гам",
      "description": "Ванильный пломбир\nсо сладкой посыпкой",
      "price": 320,
      "imgSrc": "src/assets/images/cards/bubblegum.svg"
    }
  ]
}

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProduct: (state, action) => {
       state.basket.push(action.payload)
    },
    deleteProduct: (state, action) => {
      return state.filter((product) => product.id !== action.payload)
    }
  }
})

export const {addProduct, deleteProduct} = basketSlice.actions;

export default basketSlice.reducer;