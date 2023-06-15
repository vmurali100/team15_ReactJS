import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action) => {
      
      state.users.splice(action.payload, 1);
    },
    updateUser: (state, action) => {
      state.users[action.payload.index] = action.payload;
    },
  },
});

export default usersSlice.reducer;

export const { addUser, deleteUser, updateUser } = usersSlice.actions;
