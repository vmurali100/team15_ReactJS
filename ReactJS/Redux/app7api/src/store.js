import{configureStore}from "@reduxjs/toolkit"
import usersclice from "./StudentSlice";
export const store = configureStore({
  reducer: {
    users:usersclice
  },
});
    
