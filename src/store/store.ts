import { configureStore } from '@reduxjs/toolkit'
import screenerReducer from './screenerSlice'

export const store = configureStore({
  reducer: {
    screener: screenerReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
