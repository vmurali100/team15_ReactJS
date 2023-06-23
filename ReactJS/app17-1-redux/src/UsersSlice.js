import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: [],
};

export const getUsersAsync = createAsyncThunk(
  "users/getUsersAsync",
  async () => {
    return getDataServer();
  }
);
async function getDataServer() {
  const response = await fetch("http://localhost:3000/users1");
  const data = await response.json();
  return data;
}

export const handleAddUserAsync = createAsyncThunk(
  "users/handleAddUserAsync",
  async (user) => {
    const response = fetch("http://localhost:3000/users1", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const dd = await (await response).json();
    const resp = await fetch("http://localhost:3000/users1");
    const data = await resp.json();
    return data;
  }
);

export const deleteUserAsync = createAsyncThunk(
  "users/deleteUserAsync",
  async (user) => {
    const response = fetch("http://localhost:3000/users1/" + user.id, {
      method: "DELETE",
    });
    const dd = await (await response).json();
    const resp = await fetch("http://localhost:3000/users1");
    const data = await resp.json();
    return data;
  }
);
export const handleUpdateAsync = createAsyncThunk(
  "users/handleUpdateAsync",
  async (user) => {
    const response = fetch("http://localhost:3000/users/" + user.id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const dd = await (await response).json();
    const resp = await fetch("http://localhost:3000/users");
    const data = await resp.json();
    return data;
  }
);
export const UsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getAllusers(state, actions) {
      state.users = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsersAsync.fulfilled, (state, actions) => {
      state.users = actions.payload;
    });
    builder.addCase(handleAddUserAsync.fulfilled, (state, actions) => {
      console.log("user added successfully", actions);
      state.users = actions.payload;
    });
    builder.addCase(deleteUserAsync.fulfilled, (state, actions) => {
      state.users = actions.payload;
    });
    builder.addCase(handleUpdateAsync.fulfilled, (state, actions) => {
      state.users = actions.payload;
    });
  },
});
export default UsersSlice.reducer;
