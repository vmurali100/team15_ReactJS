import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialData = {
  users: [],
};

export const getAllusersAsync = createAsyncThunk(
  "users/getAllusersAsync",
  async () => {
    getDataFromServer();
  }
);
async function getDataFromServer() {
  const responce = await fetch("http://localhost:3000/radha");
  const data = await responce.json();
  return data;
}
export const deleteUsersAsync = createAsyncThunk(
  "users/deleteUsersAsync",
  async (user) => {
    const responce = fetch("http://localhost:3000/radha/" + user.id, {
      method: "DELETE",
    });
    const dd = await (await responce).json();
    const resp = await fetch("http://localhost:3000/radha");
    const data = await resp.json();
    return data;
  }
);
export const handleAddUserAsync = createAsyncThunk(
  "users/handleAddUserAsync",
  async (user) => {
    const responce = fetch("http://localhost:3000/radha", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const dd = await (await responce).json();
    const resp = await fetch("http://localhost:3000/radha");
    const data = await resp.json();
    return data;
  }
);
export const handleUpdateAsync = createAsyncThunk(
  "users/handleUpdateAsync",
  async (user) => {
    const responce = fetch("http://localhost:3000/radha/" + user.id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type":"application/json",
      },
      body: JSON.stringify(user),
    });
    const dd = await (await responce).json();
    const resp = await fetch("http://localhost:3000/radha");
    const data = await resp.json();
    return data;
  }
);

export const JagaSlice = createSlice({
  name: "users",
  initialState: initialData,
  reducers: {
    getAllusers(state, actions) {
      state.actions = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllusersAsync.fulfilled, (state, actions) => {
      state.users = actions.payload;
    });
    builder.addCase(handleAddUserAsync.fulfilled, (state, actions) => {
      // console.log("User Added Suceefully", actions.payload);
      state.users = actions.payload;
    });
    builder.addCase(deleteUsersAsync.fulfilled, (state, actions) => {
      state.users = actions.payload;
    });
    builder.addCase(handleUpdateAsync.fulfilled, (state, actions) => {
      state.users = actions.payload;
    });
  },
});
export default JagaSlice.reducer;
