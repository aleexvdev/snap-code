import { configureStore } from "@reduxjs/toolkit";
import framerReducer from './features/framerSlice';
import editorReducer from './features/editorSlice';

export const store = configureStore({
  reducer: {
    framer: framerReducer,
    editor: editorReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;