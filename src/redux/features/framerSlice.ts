import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FramerState {
  padding: number | string;
  radius: number;
  opacity: number;
  background: string;
  width: number;
  height: number;
}

const initialState: FramerState = {
  padding: 16,
  radius: 8,
  opacity: 100,
  background: 'linear-gradient(-45deg, #402662 0%, #8000FF 100%)',
  width: 200,
  height: 200
}

const framerSlice = createSlice({
  name: 'framer',
  initialState,
  reducers: {
    setPadding: (state, action: PayloadAction<number | string>) => {
      state.padding = action.payload;
    },
    setRadius: (state, action: PayloadAction<number>) => {
      state.radius = action.payload;
    },
    setOpacity: (state, action: PayloadAction<number>) => {
      state.opacity = action.payload;
    },
    setBackground: (state, action: PayloadAction<string>) => {
      state.background = action.payload;
    },
  }
});

export const { setPadding, setRadius, setOpacity, setBackground } = framerSlice.actions;
export default framerSlice.reducer;