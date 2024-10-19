import { createSlice } from "@reduxjs/toolkit";

interface WindowSlice {
  header: boolean;
  border: boolean;
}

const initialState: WindowSlice = {
  header: true,
  border: false,
}

const windowSlice = createSlice({
  name: 'window',
  initialState,
  reducers: {
    toggleHeader: (state) => {
      state.header =!state.header;
    },
    toggleBorder: (state) => {
      state.border = !state.border;
    },
  },
});

export const { toggleHeader, toggleBorder } = windowSlice.actions;
export default windowSlice.reducer;