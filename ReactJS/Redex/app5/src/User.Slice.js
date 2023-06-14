import{createSlice} from "@reduxjs/toolkit"

const initailState={
    users:[]
}
export const UserSlice=createSlice({
    name:"users",
    initailState,
    reducers:{
        adduser:()=>{},
        updatauser:()=>{},
        deleteuser:()=>{}
    }
})
export default UserSlice.reducer
export const {adduser,updatauser,deleteuser}=UserSlice.actions