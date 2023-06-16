import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: [],
};
export const DilliSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUsers: (state, actions) => {
      state.users.push(actions.payload);
    },
    deleteUser: (state, actions) => {
      state.users.splice(actions.payload, 1);
    },
    updateUser: (state, actions) => {
      state.users[actions.payload.index] = actions.payload;
    },
  },
});
export default DilliSlice.reducer;
export const { addUsers, deleteUser, updateUser } = DilliSlice.actions;
