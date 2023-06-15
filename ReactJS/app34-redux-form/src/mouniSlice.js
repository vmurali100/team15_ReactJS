import { createSlice } from "@reduxjs/toolkit";
const intialState = {
  users: [],
};
export const usersSlice = createSlice({
  name: "users",
  intialState,
  reducers: {
    addUsers: () => {},
    deleteUsers: () => {},
    updateUsers: () => {},
  },
});

export default usersSlice.reducer;
export const { addUsers, deleteUsers, updateUsers } = usersSlice.actions;
