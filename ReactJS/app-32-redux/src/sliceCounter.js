import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};
export const sliceCounter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementCount: (state) => {
      state.value = state.value + 1;
    },
    decrementCount: (state) => {
      state.value = state.value - 1;
    },
  },
});
export default sliceCounter.reducer;
export const { incrementCount, decrementCount } = sliceCounter.actions;
