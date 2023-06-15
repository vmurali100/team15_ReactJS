import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./User.slice";
export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
