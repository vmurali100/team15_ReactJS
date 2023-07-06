import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialData = {
  users: [],
};

export const getAllUsersAsync = createAsyncThunk(
  "users/getAllUsersAsync",
  async () => {
    try {
      const response = await fetch("http://localhost:3000/student");
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error fetching all users:", error);
      throw error;
    }
  }
);

export const deleteUsersAsync = createAsyncThunk(
  "users/deleteUsersAsync",
  async (user) => {
    try {
      await fetch(`http://localhost:3000/student/${user.id}`, {
        method: "DELETE",
      });
      const response = await fetch("http://localhost:3000/student");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error;
    }
  }
);

export const addUsersAsync = createAsyncThunk(
  "users/addUsersAsync",
  async (user) => {
    try {
      await fetch("http://localhost:3000/student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const response = await fetch("http://localhost:3000/student");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error adding user:", error);
      throw error;
    }
  }
);

export const updateUsersAsync = createAsyncThunk(
  "users/updateUsersAsync",
  async (user) => {
    try {
      await fetch(`http://localhost:3000/student/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const response = await fetch("http://localhost:3000/student");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  }
);

const UsersSlice = createSlice({
  name: "users",
  initialState: initialData,
  reducers: {
    getAllUsers(state, action) {
      state.users = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsersAsync.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(deleteUsersAsync.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(addUsersAsync.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(updateUsersAsync.fulfilled, (state, action) => {
        state.users = action.payload;
      });
  },
});

export const { getAllUsers } = UsersSlice.actions;
export default UsersSlice.reducer;
