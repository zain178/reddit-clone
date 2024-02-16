import { configureStore } from '@reduxjs/toolkit'
import likesReducer from '../components/likes/likesSlice'

export const store = configureStore({
  reducer: {
    likes: likesReducer,
  },
})