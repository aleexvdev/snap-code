import { createSlice } from "@reduxjs/toolkit";

interface EditorSlice {
  language: string;
  theme: string;
  lineNumbers: boolean;
  lineStart: number;
  lineWrapping: boolean;
}

const initialState: EditorSlice = {
  language: 'javascript',
  theme: 'Atomone',
  lineNumbers: true,
  lineStart: 1,
  lineWrapping: true,
}

const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    toggleLineNumbers: (state) => {
      state.lineNumbers =!state.lineNumbers;
    },
    setLineStart: (state, action) => {
      state.lineStart = action.payload;
    },
    toggleLineWrapping: (state) => {
      state.lineWrapping =!state.lineWrapping;
    },
  },
});

export const { setLanguage, setTheme, toggleLineNumbers, setLineStart, toggleLineWrapping } = editorSlice.actions;
export default editorSlice.reducer;