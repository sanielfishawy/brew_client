import { configureStore } from '@reduxjs/toolkit';
import brewReducer from '../features/brew/brewSlice';
import { fetchState } from '../features/brew/brewSlice'

export const store = configureStore({
  reducer: {
    brew: brewReducer,
  },
});

store.dispatch(fetchState())
setInterval(
  async () => {await store.dispatch(fetchState())},
  1000,
)
