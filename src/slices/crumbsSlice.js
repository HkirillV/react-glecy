import {createSlice} from "@reduxjs/toolkit";

const initialState = {}

const crumbsSlice = createSlice({
  name: 'crumbsSlice',
  initialState,
  reducers: {
    addCrumbsSlice: (state, action) => {
      return state = action.payload
    }
  }
})

export  const {addCrumbsSlice} = crumbsSlice.actions

export default crumbsSlice.reducer;