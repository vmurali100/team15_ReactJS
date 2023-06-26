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
  const response = await fetch("http://localhost:3005/Ammu");
  const data = await response.json();
  console.log(data);
  return data;
}
export const handleAddUserAsync = createAsyncThunk(
  "user/handleAddUserAsync",
  async (user) => {
    const response = fetch("http://localhost:3005/Ammu", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const resp = await fetch("http://localhost:3005/Ammu");
    const data = await resp.json();
    return data;
  }
);
export const deleteUserAsync = createAsyncThunk(
  "user/deleteUserAsync",
  async (user) => {
    const response = fetch("http://localhost:3005/Ammu/" + user.id, {
      method: "DELETE",
    });
    const resp = await fetch("http://localhost:3005/Ammu");
    const data = await resp.json();
    return data;
  }
);
export const handleUpdateUserAsync=createAsyncThunk(
    "user/handleUpdateUserAsync", async(user)=>{
        const response=fetch("http://localhost:3005/Ammu/"+ user.id,{
            method:"PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(user),
        })
        const resp = await fetch("http://localhost:3005/Ammu");
        const data = await resp.json();
        return data;
    }
)
export const ReddySlice = createSlice({
  name: "users",
  initialState: initialData,
  reducers: {
    getAlluser(state, action) {
      state.users = action.payload;
    },
  },
  extraReducers: (Amma) => {
    Amma.addCase(getUsersAsync.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    Amma.addCase(handleAddUserAsync.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    Amma.addCase(deleteUserAsync.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});
export default ReddySlice.reducer;
export const { getAlluser } = ReddySlice.actions;
