import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  "title": "Новинки"
}

const crumbsSlice = createSlice({
  name: 'crumbsSlice',
  initialState,
  reducers: {
    addCrumbsSlice: (state, action) => {
      return action.payload
    }
  }
})

export  const {addCrumbsSlice} = crumbsSlice.actions

export default crumbsSlice.reducer;