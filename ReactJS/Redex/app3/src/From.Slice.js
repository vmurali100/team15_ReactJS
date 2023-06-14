import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const FromSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    adduser: (state, actions) => {
      console.log(actions);
      state.users.push(actions.payload);
    },
    deleteuser: (state, actions) => {
      state.users.splice(actions.payload, 1);
    },
    updateuser: (state, actions) => {
      state.users[actions.payload.index] = actions.payload;
    },
  },
});
export default FromSlice.reducer;
export const { adduser, deleteuser, updateuser } = FromSlice.actions;
