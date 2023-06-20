import { configureStore } from "@reduxjs/toolkit";
import JagaSlice from "./Jaga.Slice";
export const store = configureStore({
  reducer: {
    users:JagaSlice
  },
});
