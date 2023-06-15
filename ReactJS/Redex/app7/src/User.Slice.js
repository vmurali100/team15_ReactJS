import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: [],
};
export const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    adduser: (state, actions) => {
      console.log(actions);
      state.users.push(actions.payload);
    },
    Deleteuser: (state, actions) => {
      state.users.splice(actions.payload, 1);
    },
    Updatauser: (state, actions) => {
      state.users[actions.payload.index] = actions.payload;
    },
  },
});
export default UserSlice.reducer;
export const { adduser, Deleteuser, Updatauser } = UserSlice.actions;
