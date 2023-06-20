import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: [],
};
export const UsersSlice = createSlice({
    name: "users",
    initialState,
    reducers:{
        addUser:()=>{},
        deleteUser:()=>{},
        updateUser:()=>{}
    }
})
export default UsersSlice.reducer;
export const {addUser,deleteUser,updateUser}=UsersSlice.actions