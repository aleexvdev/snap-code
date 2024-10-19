import { createSlice } from "@reduxjs/toolkit";

interface FontSlice {
  fontSize: string;
  fontWeight: string;
  fontStyle: string;
}

const initialState: FontSlice = {
  fontSize: '12px',
  fontWeight: 'normal',
  fontStyle: 'normal', 
}

const fontSlice = createSlice({
  name: 'font',
  initialState,
  reducers: {
    setFontSize: (state, action) => {
      state.fontSize = action.payload;
    },
    setFontWeight: (state, action) => {
      state.fontWeight = action.payload;
    },
    setFontStyle: (state, action) => {
      state.fontStyle = action.payload;
    },
  },
});

export const { setFontSize, setFontWeight, setFontStyle } = fontSlice.actions;
export default fontSlice.reducer;