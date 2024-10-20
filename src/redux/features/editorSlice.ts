import { createSlice } from "@reduxjs/toolkit";

interface EditorSlice {
  language: string;
  theme: string;
  lineNumbers: boolean;
  lineStart: number;
  lineWrapping: boolean;
  tabName: string;
}

const initialState: EditorSlice = {
  language: 'javascript',
  theme: 'vsCode',
  lineNumbers: true,
  lineStart: 1,
  lineWrapping: true,
  tabName: "Untitled"
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
    setTabName: (state, action) => {
      state.tabName = action.payload;
    }
  },
});

export const { setLanguage, setTheme, toggleLineNumbers, setLineStart, toggleLineWrapping, setTabName } = editorSlice.actions;
export default editorSlice.reducer;