import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FramerState {
  padding: number;
  radius: number;
  opacity: number;
}

const initialState: FramerState = {
  padding: 16,
  radius: 8,
  opacity: 100,
}

const framerSlice = createSlice({
  name: 'framer',
  initialState,
  reducers: {
    setPadding: (state, action: PayloadAction<number>) => {
      state.padding = action.payload;
    },
    setRadius: (state, action: PayloadAction<number>) => {
      state.radius = action.payload;
    },
    setOpacity: (state, action: PayloadAction<number>) => {
      state.opacity = action.payload;
    },
  }
});

export const { setPadding, setRadius, setOpacity } = framerSlice.actions;
export default framerSlice.reducer;