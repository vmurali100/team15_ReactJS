import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialData = {
  users: [],
};
export const getAllusersAsync = createAsyncThunk(
  "users/getAllusersAsync",
  async () => {
    return getDataFromServer();
  }
);

async function getDataFromServer() {
  const responce = await fetch("http://localhost:3000/raju");
  const data = await responce.json();
  console.log(data);
  return data;
}
export const DeleteUsersAsync = createAsyncThunk(
  "users/DeleteUsersAsync",
  async (user) => {
    const responce = fetch("http://localhost:3000/raju/" + user.id, {
      method: "DELETE",
    });
    const dd = await (await responce).json();
    const resp = await fetch("http://localhost:3000/raju");
    const data = await resp.json();
    return data;
  }
);
export const AddusersAsync = createAsyncThunk(
  "users/AddusersAsync",
  async (user) => {
    const responce = fetch("http://localhost:3000/raju", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const dd = await (await responce).json();
    const resp = await fetch("http://localhost:3000/raju");
    const data = await resp.json();
    return data;
  }
);
export const UpdateUsersAsync = createAsyncThunk(
  "users/UpdateUsersAsync",
  async (user) => {
    const responce = fetch("http://localhost:3000/raju/" + user.id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const dd = await (await responce).json();
    const resp = await fetch("http://localhost:3000/raju");
    const data = await resp.json();
    return data;
  }
);
const RadhaSlice = createSlice({
  name: "users",
  initialState: initialData,
  reducers: {
    getAllusers(state, action) {
      state.users = action.payload;
    },
  },
  extraReducers: (jaga) => {
    jaga.addCase(getAllusersAsync.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    jaga.addCase(DeleteUsersAsync.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    jaga.addCase(AddusersAsync.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    jaga.addCase(UpdateUsersAsync.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});
export default RadhaSlice.reducer;
