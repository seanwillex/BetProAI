import { configureStore } from '@reduxjs/toolkit';
import predictionsReducer from './predictionsSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    predictions: predictionsReducer,
    user: userReducer,
  },
});