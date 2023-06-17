import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialData = {
  users: [],
};
export const getUsersAsync = createAsyncThunk("users/getUsersAsync", async () => {
  const response = await fetch("http://localhost:3000/users");
  const data = await response.json();
  console.log(data);
  return data;
});
const usersSlice = createSlice({
  name: "users",
  initialState: initialData,
  reducers: {
    getAllUsers(state, action) {
      state.users = action.payload;
    },
  }, // Normal Action
  extraReducers: (builder) => {
    builder.addCase(getUsersAsync.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  }, // for Async Calls ..or Server Communication
});

export default usersSlice.reducer