import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
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

export default counterSlice.reducer;
export const { incrementCount, decrementCount } = counterSlice.actions;
