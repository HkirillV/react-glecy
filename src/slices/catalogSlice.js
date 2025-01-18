import {createSlice} from '@reduxjs/toolkit';

const initialState = []

const catalogSlice = createSlice(
  {
    name: "catalog",
    initialState,
    reducers: {
      setCatalog: (state, action) => {
        return [...action.payload]
      }
    }
  }
)

export const {setCatalog} = catalogSlice.actions;

export default catalogSlice.reducer;