import { configureStore } from '@reduxjs/toolkit'
import globalReducer from './reducers/globalReducer'
import stockReducer from './reducers/stockReducer'

export const store = configureStore({
  reducer: {
    globalSlice: globalReducer,
    stockSlice: stockReducer
  },
})