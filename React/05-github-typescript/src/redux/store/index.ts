import { configureStore } from '@reduxjs/toolkit';
import issueSlice from '../reducers/issueSlice';

const store = configureStore({
  reducer: {
    issue: issueSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
