import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/theme.slice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
export default store;
