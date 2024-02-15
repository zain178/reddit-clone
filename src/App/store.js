import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../components/counter/counterSlice'
import likesReducer from '../components/likes/likesSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    likes: likesReducer,
  },
})