import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface ThemeState {
  openMenu: boolean;
}

const initialState: ThemeState = {
  openMenu: false,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.openMenu = !state.openMenu;
    },
  },
});

export const { toggleMenu } = themeSlice.actions;

export default themeSlice.reducer;
export const themeSelector = (state: RootState) => state.theme;
