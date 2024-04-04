/* eslint-disable */

import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    openMenu: false,
  },
  reducers: {
    toggleMenu(state) {
      state.openMenu = !state.openMenu;
    },
  },
});

export const { toggleMenu } = themeSlice.actions;

export default themeSlice.reducer;
export const themeSelector = (state) => state.theme;
