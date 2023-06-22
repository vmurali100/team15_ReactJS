import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialData = {
  users: [],
};

export const getUsersAsync =createAsyncThunk(
    "users/getUsersAsync",
   async ()=>{
     const response =await fetch("http://filltext.com/?rows=5&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true");
    const data =await response.json();
    return data
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