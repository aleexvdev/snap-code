import { createSlice } from "@reduxjs/toolkit";

interface WindowSlice {
  header: boolean;
  border: string;
}

const initialState: WindowSlice = {
  header: true,
  border: "none"
}

const windowSlice = createSlice({
  name: 'window',
  initialState,
  reducers: {
    toggleHeader: (state) => {
      state.header =!state.header;
    },
    setBorder: (state, action) => {
      state.border = action.payload;
    },
  },
});

export const { toggleHeader, setBorder } = windowSlice.actions;
export default windowSlice.reducer;