import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};
export const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    adduser: () => {},
    Deleteuser: () => {},
    Updateuser: () => {},
  },
});
export default UserSlice.reducer;
export const { adduser, Deleteuser, Updateuser } = UserSlice.actions;
