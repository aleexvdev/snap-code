import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ExportFormat = 'png' | 'svg' | 'jpeg';
export type ExportScale = '1' | '2' | '3';

interface ExportState {
  format: ExportFormat;
  scale: ExportScale;
}

const initialState: ExportState = {
  format: 'png',
  scale: '1',
};

const exportSlice = createSlice({
  name: 'export',
  initialState,
  reducers: {
    setExportFormat: (state, action: PayloadAction<ExportFormat>) => {
      state.format = action.payload;
    },
    setExportScale: (state, action: PayloadAction<ExportScale>) => {
      state.scale = action.payload;
    },
  },
});

export const { setExportFormat, setExportScale } = exportSlice.actions;
export default exportSlice.reducer;