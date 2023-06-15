import { createSlice } from "@reduxjs/toolkit";
const intialState = {
  users: [],
};
export const jagaSlice = createSlice({
  name: "users",
  intialState,
  reducers: {
    addUsers: () => {},
    deleteUsers: () => {},
    updateUsers: () => {},
  },
});
export default jagaSlice.reducer;

export const { addUsers, deleteUsers, updateUsers } = jagaSlice.actions;
