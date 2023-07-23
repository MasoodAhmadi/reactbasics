import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    resetCount: (state) => {
      state.count = initialState.count;
    },
  },
});

export const { increment, resetCount } = counterSlice.actions;

export default counterSlice.reducer;
