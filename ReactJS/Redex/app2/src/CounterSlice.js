import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};
export const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementcount: (state) => {
      state.value = state.value + 1;
    },
    decrementcount: (state) => {
      state.value = state.value - 1;
    },
  },
});
export default CounterSlice.reducer;
export const { incrementcount, decrementcount } = CounterSlice.actions;
