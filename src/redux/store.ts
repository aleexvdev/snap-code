import { configureStore } from "@reduxjs/toolkit";
import framerReducer from './features/framerSlice';
import editorReducer from './features/editorSlice';
import exportReducer from './features/exportSlice';
import fontReducer from './features/fontSlice';
import windowReducer from './features/windowSlice';

export const store = configureStore({
  reducer: {
    framer: framerReducer,
    editor: editorReducer,
    window: windowReducer, 
    font: fontReducer, 
    export: exportReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;