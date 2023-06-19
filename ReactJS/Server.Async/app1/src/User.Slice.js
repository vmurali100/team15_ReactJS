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
  const response = await fetch(" http://localhost:3000/users");
  const data = await response.json();
  console.log(data);
  return data;
}
export const handleAddUserAsync = createAsyncThunk(
  "users/handleAddUserAsync",
  async (user) => {
    const response = fetch(" http://localhost:3000/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const dd = await (await response).json();
    const resp = await fetch(" http://localhost:3000/users");
    const data = await resp.json();
    return data;
   
    
  }
);
export const deleteUserAsync = createAsyncThunk(
  "user/deleteUserAsync",
  async (user) => {
    const response = fetch(
      " http://localhost:3000/users/" + user.id, 
      {
        method: "DELETE",
      }
    );
    const dd = await (await response).json();
    const resp = await fetch(" http://localhost:3000/users");
    const data = await resp.json();
    return data;
  }
);
export const handleUpdateUserAsync = createAsyncThunk(
  "user/handleUpdateUserAsync",
  async (user) => {
    const response = fetch(
      " http://localhost:3000/users/" + user.id,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    const dd = await (await response).json();
    const resp = await fetch(" http://localhost:3000/users");
    const data = await resp.json();
    return data;
  }
);
const UserSlice = createSlice({
  name: "users",
  initialState: initialData,
  reducers: {
    getAllusers(state, action) {
      state.users = action.payload;
    },
  },

  extraReducers: (Reddy) => {
    Reddy.addCase(getUsersAsync.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    Reddy.addCase(handleAddUserAsync.fulfilled, (state, action) => {
      console.log("added sussefully");
      state.users = action.payload;
    });
    Reddy.addCase(deleteUserAsync.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    Reddy.addCase(handleUpdateUserAsync.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});
export default UserSlice.reducer;
export const { getAllusers } = UserSlice.actions;
