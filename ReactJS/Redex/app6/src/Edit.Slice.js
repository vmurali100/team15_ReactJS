import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};
export const EditSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    adduser: (state, actions) => {
      state.users.push(actions.payload);
    },
    deleteuser: (state, actions) => {
      state.users.splice(actions.payload, 1);
    },
    Updatauser: (state, actions) => {
      state.users[actions.payload.index] = actions.payload;
    },
  },
});
export default EditSlice.reducer;
export const { adduser, deleteuser, Updatauser } = EditSlice.actions;
