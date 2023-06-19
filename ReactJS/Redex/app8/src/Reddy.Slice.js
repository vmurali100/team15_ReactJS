import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};
export const ReddySlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    adduser: (state, actions) => {
      console.log(actions);
      state.users.push(actions.payload);
    },
    Updateusers: (state, actions) => {
      state.users[actions.payload.index] = actions.payload;
    },
    Deleteuser: (state, actions) => {
      state.users.splice(actions.payload, 1);
    },
  },
});
export default ReddySlice.reducer;
export const { adduser, Updateusers, Deleteuser } = ReddySlice.actions;
