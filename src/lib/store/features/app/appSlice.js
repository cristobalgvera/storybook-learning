import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hasError: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setError: (state, action) => {
      state.hasError = action.payload;
    },
  },
});

export const { setError } = appSlice.actions;
export const appSelector = (state) => state.app;
export default appSlice.reducer;
