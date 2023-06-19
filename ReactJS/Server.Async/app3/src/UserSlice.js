import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialData = {
  users: [],
};
export const getUsersAsync=createAsyncThunk("users/getUsersAsync", async()=>{
   
 return getUserFormserver()
})
async function getUserFormserver(){
  const response=await fetch("https://jsonplaceholder.typicode.com/albums")
  const data=await response.json()
  console.log(data)
  return data
}
export const handleAddUserAsync=createAsyncThunk("users/handleAddUserAsync" ,async(user)=>{
  
})
const UserSlice = createSlice({
  name: "users",
  initialState: initialData,
  reducers: {
    getAlluser(state,action) {
      state.users = action.payload;
    },
  },
  extraReducers: (Sekhar) => {
    Sekhar.addCase(getUsersAsync.fulfilled,(state,action)=>{
        state.users=action.payload
    })
  },
});
export default UserSlice.reducer
export const {getAlluser}=UserSlice.actions