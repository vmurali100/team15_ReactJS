import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialData = {
  users: [],
};
export const getUsersAsync = createAsyncThunk(
  "users/getUsersAsync",
  async () => {
    return getUserFormserver();
  }
);
async function getUserFormserver() {
  const response = await fetch("http://localhost:3002/Users");
  const data = await response.json();
  console.log(data);
  return data;
}
export const handleAddUserAsync = createAsyncThunk(
  "users/handleAddUserAsync",
  async (user) => {
    const response = fetch(" http://localhost:3002/Users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const resp = await fetch(" http://localhost:3002/Users");
    const data = await resp.json();
    return data;
  }
);

export const deleteUserAsync = createAsyncThunk(
  "users/deleteUserAsync",
  async (user) => {
    const response = fetch(" http://localhost:3002/Users/" + user.id, {
      method: "DELETE",
    });
    const resp = await fetch(" http://localhost:3002/Users");
    const data = await resp.json();
    return data;
  }
);
export const handleUpdateUserAsync = createAsyncThunk(
  "users/handleUpdateUserAsync",
  async (user) => {
    const response = fetch("http://localhost:3002/Users/" + user.id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const resp = await fetch(" http://localhost:3002/Users");
    const data = await resp.json();
    return data;
  }
);
const UserSlice = createSlice({
  name: "users",
  initialState: initialData,
  reducers: {
    getAlluser(state, action) {
      state.users = action.payload;
    },
  },
  extraReducers: (Sekhar) => {
    Sekhar.addCase(getUsersAsync.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    Sekhar.addCase(handleAddUserAsync.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    Sekhar.addCase(deleteUserAsync.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    Sekhar.addCase(handleUpdateUserAsync.fulfilled,(state,action)=>{
      state.users=action.payload
    })
  },
});
export default UserSlice.reducer;
export const { getAlluser } = UserSlice.actions;