import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: () => {},
    deleteUser: () => {},
    updateUser: () => {},
  },
});

export default usersSlice.reducer;

export const { addUser, deleteUser, updateUser } = usersSlice.actions;
