import { configureStore } from "@reduxjs/toolkit";
import framerReducer from './features/framerSlice';

export const store = configureStore({
  reducer: {
    framer: framerReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;