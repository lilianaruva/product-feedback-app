import { configureStore } from '@reduxjs/toolkit'
import feedbackReducer from './redux/reducers/feedback';
export const store = configureStore({
  reducer: {
    feedback: feedbackReducer,
  },
})