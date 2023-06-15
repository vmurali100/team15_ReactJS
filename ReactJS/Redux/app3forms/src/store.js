import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./Student.Slice";
export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
