import { configureStore } from "@reduxjs/toolkit";
import ReddyReducer from "./Reddy.Slice";
export const Store = configureStore({
  reducer: {
    users: ReddyReducer,
  },
});
