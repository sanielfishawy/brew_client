import { configureStore } from '@reduxjs/toolkit';
import brewReducer from '../features/brew/brewSlice';

export const store = configureStore({
  reducer: {
    brew: brewReducer,
  },
});
