import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};
const getUsersAsync = createAsyncThunk("users/getUsersAsync", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await response.json();
  console.log(data);
  response(data);
});
export const UsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getAllUsers(state, actions) {
      state.users = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsersAsync.fulfilled, (state, actions) => {
      state.users = actions.payload;
    });
  },
});
export default UsersSlice.reducer;
