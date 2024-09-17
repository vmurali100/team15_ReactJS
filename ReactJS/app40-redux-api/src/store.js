import { configureStore } from "@reduxjs/toolkit";
import  VaniSlice  from "./Vani.Slice";

export const store = configureStore({
  reducer: {
    users:VaniSlice
  }
});
