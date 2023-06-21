import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialData = {
  users: [],
};
export const getUsersAysnc = createAsyncThunk(
  "users/getUsersAysnc",
  async () => {
    return getUserFormserver();
  }
);

async function getUserFormserver() {
  const response = await fetch("http://localhost:3001/Users");
  const data = await response.json();
  console.log(data);
  return data;
}

export const handleAddUserAsync = createAsyncThunk(
  "users/handleAddUserAsync",
  async (user) => {
    const response = fetch("http://localhost:3001/Users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const resp = await fetch(" http://localhost:3001/Users");
    const data = await resp.json();
    return data;
  }
);

export const handleUpdateUserAsync = createAsyncThunk(
  "users/handleUpdateUserAsync",
  async (user) => {
    const response = fetch("http://localhost:3001/Users/" + user.id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const resp = await fetch(" http://localhost:3001/Users");
    const data = await resp.json();
    return data;
  }
);
export const deleteUserAsync = createAsyncThunk(
  "users/deleteUserAsync",
  async (user) => {
    const response = fetch("http://localhost:3001/Users/" + user.id, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const resp = await fetch(" http://localhost:3001/Users");
    const data = await resp.json();
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
    bulid.addCase(handleAddUserAsync.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    bulid.addCase(handleUpdateUserAsync.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    bulid.addCase(deleteUserAsync.fulfilled,(state,action)=>{
      state.users=action.payload
    })
  },
});
export default userSlice.reducer;
export const { getAllusers } = userSlice.actions;
