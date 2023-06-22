import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialData = {
  users: [],
};

export const getUsersAsync = createAsyncThunk(
  "users/getUsersAsync",
  async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const data = await response.json();
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
  },
  extraReducers: (builder) => {
    builder.addCase(getUsersAsync.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export const { getAllUsers } = usersSlice.actions;
export default usersSlice.reducer;
