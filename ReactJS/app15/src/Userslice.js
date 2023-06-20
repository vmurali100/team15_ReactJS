import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};
export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, actions) => {
      state.users.push(actions.payload);
    },
    deleteUser: (state, actions) => {
      state.users.splice(actions.payload, 1);
    },
    updateUser: (state,actions) => {
        state.users[actions.payload.index]=actions.payload
    },
  },
});
export default usersSlice.reducer;

export const { addUser, deleteUser, updateUser } = usersSlice.actions;
