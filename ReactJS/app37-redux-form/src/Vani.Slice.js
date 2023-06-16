import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: [],
};
export const VaniSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUsers: (state,actions) => {
        console.log(actions)
        state.users.push(actions.payload)
    },
    deleteUser: (state,actions) => {
        state.users.splice(actions.payload,1)
    },
    updateUser: (state,actions) => {
        state.users[actions.payload.index]=actions.payload
    },
  },
});
export default VaniSlice.reducer;
export const { addUsers, deleteUser, updateUser } = VaniSlice.actions;
