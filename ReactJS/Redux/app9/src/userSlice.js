/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialData = {
  users: [],
};
export const getUsersAsync = createAsyncThunk(
  "users/getUsersAsync",
  async () => {
    return getUserFromServer();
  }
);

async function getUserFromServer() {
  const response = await fetch("http://localhost:3000/student");
  const data = await response.json();
  return data;
}
// To Post The Data

export const handleAddUserAsync = createAsyncThunk(
  "users/handleAddUserAsync",
  async (user) => {
    const response = fetch("http://localhost:3000/student", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const dd = await (await response).json();
    const resp = await fetch("http://localhost:3000/student");
    const data = await resp.json();
    return data;
  }
);
export const deleteUserAsync = createAsyncThunk(
  "users/deleteUserAsync",
  async (user) => {
    const response = fetch("http://localhost:3000/student/" + user.id, {
      method: "DELETE",
    });
    const dd = await (await response).json();
    const resp = await fetch("http://localhost:3000/student");
    const data = await resp.json();
    return data;
  }
);
export const handleUpdateUserAsync = createAsyncThunk(
  "'users/handleUpdateUserAsync'",
  async (user) => {
    const response = fetch("http://localhost:3000/student/" + user.id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const dd = await (await response).json();
    const resp = await fetch("http://localhost:3000/student");
    const data = await resp.json();
    return data;
  }
);
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
    builder.addCase(handleAddUserAsync.fulfilled, (state, action) => {
      console.log("User Added Succesfully", action.payload);
      state.users = action.payload;
    });
    builder.addCase(deleteUserAsync.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(handleUpdateUserAsync.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  }, 
});

export default usersSlice.reducer;
