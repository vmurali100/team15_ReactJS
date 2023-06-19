import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialData = {
  users: [],
};
export const getUsersAysnc = createAsyncThunk(
  "users/getUsersAysnc",
  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await response.json();
    console.log(data);
    return data;
  }
);
const userSlice = createSlice({
  name: "users",
  initialState: initialData,
  reducers: {
    getAllusers(state, action) {
      state.users = action.payload;
    },
  },
  extraReducers: (bulid) => {
    bulid.addCase(getUsersAysnc.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});
export default userSlice.reducer;
export const{getAllusers}=userSlice.actions
