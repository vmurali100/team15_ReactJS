import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: [],
};
export const getUsersAsync = createAsyncThunk(
  "users/getUsersAsync",
  async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const data = await response.json();

    return data;
  }
);

export const Userslice = createSlice({
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
export const { getAllUsers } = Userslice.actions;
export default Userslice.reducer;
