import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialData = {
  users: [],
};
export const getAllusersAsync = createAsyncThunk(
  "users/getAllusersAsync",
  async () => {
    return getDataFromserver();
  }
);
async function getDataFromserver() {
  const responce = await fetch("http://localhost:3000/vani");
  const data = await responce.json();
  console.log(data);
  return data;
}
export const handleAddUserAsync = createAsyncThunk(
  "users/handleAddUserAsync",
  async (user) => {
    const responce = fetch("http://localhost:3000/vani", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const dd = await (await responce).json();
    const resp = await fetch("http://localhost:3000/vani");
    const data = await resp.json();
    return data;
  }
);
export const handleUpdateUserasync = createAsyncThunk(
  "users/handleUpdateUserasync",
  async (user) => {
    const responce = fetch("http://localhost:3000/vani/" + user.id, {
      method: "PUT",

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const dd = await (await responce).json();
    const resp = await fetch("http://localhost:3000/vani");
    const data = await resp.json();
    return data;
  }
);
export const handleDeleteAsync = createAsyncThunk(
  "users/handleDeleteAsync",
  async (user) => {
    const responce = fetch("http://localhost:3000/vani/" + user.id, {
      method: "DELETE",
    });
    const dd = await (await responce).json();
    const resp = await fetch("http://localhost:3000/vani");
    const data = await resp.json();
    return data;
  }
);
const VaniSlice = createSlice({
  name: "users",
  initialState: initialData,
  reducers: {
    getAlluser(state, action) {
      state.users = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllusersAsync.fulfilled, (state, actions) => {
      state.users = actions.payload;
    });
    builder.addCase(handleAddUserAsync.fulfilled, (state, actions) => {
      state.users = actions.payload;
    });
    builder.addCase(handleDeleteAsync.fulfilled, (state, actions) => {
      state.users = actions.payload;
    });
    builder.addCase(handleUpdateUserasync.fulfilled,(state,actions)=>{
      state.users=actions.payload
    })
  },
});
export default VaniSlice.reducer;
export const { getAlluser } = VaniSlice.actions;
