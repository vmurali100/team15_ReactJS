import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: [],
};
export const RadhaSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state,actions) => {
        console.log(actions)
        // state.users.push(actions.payload)
    },
    deleteUser: () => {},
    updateUser: () => {},
  },
});
export default RadhaSlice.reducer;
export const { addUser, deleteUser, updateUser } = RadhaSlice.actions;
