import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    posts: []
}

export const counterSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    
    decrement: (state) => {
      state.value -= 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer