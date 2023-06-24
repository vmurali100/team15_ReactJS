import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
const initialData={
    users:[],
}
export const getUsersAsync=createAsyncThunk("users/getUsersAsync",async()=>{
    return getUserFromServer();
})
async function getUserFromServer(){
    const response=await fetch("http://localhost:3000/users4");
    const data=await response.json();
    console.log(data);
    return(data)
}

export const handleAddUserAsync=createAsyncThunk(
    "users/handleAddUserAsync",async(user)=>{
        const response=fetch("http://localhost:3000/users4",{
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
        const dd=await(await response).json()
        const resp=await fetch("");
        const data=await resp.json();
        return(data)
    }
)

export const deleteUserAsync = createAsyncThunk(
    "users/deleteUserAsync",
    async (user) => {
      const response = fetch("http://localhost:3000/users4/" + user.id, {
        method: "DELETE",
      });
      const dd = await (await response).json();
      const resp = await fetch("http://localhost:3000/users4");
      const data = await resp.json();
      return data;
    }
  );
  export const handleUpdateUserAsync=createAsyncThunk("'users/handleUpdateUserAsync'",async (user)=>{
    const response = fetch("http://localhost:3000/users4/" + user.id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const dd = await (await response).json();
    const resp = await fetch("http://localhost:3000/users4");
    const data = await resp.json();
    return data;
  })
  const UsersSlice=createSlice({
    name:"users",
    initialState:initialData,
    reducers:{
        getAllUsers(state,actions){
            state.users=actions.payload
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(getUsersAsync.fulfilled,(state,actions)=>{
            state.users=actions.payload
        })
        builder.addCase(handleAddUserAsync.fulfilled,(state,actions)=>{
            console.log("user added successfully",actions.payload)
            state.users=actions.payload
        })
        builder.addCase(deleteUserAsync.fulfilled,(state,actions)=>{
            state.users=actions.payload
        })
        builder.addCase(handleUpdateUserAsync.fulfilled,(state,actions)=>{
            state.users=actions.payload
        })
    }
    }
  )
  export default UsersSlice.reducer