import { configureStore } from "@reduxjs/toolkit";
import RadhaReducer from "./Radha.Slice"
export const store = configureStore({
  reducer: {
    users:RadhaReducer
  },
});
