import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    value :0
}
 export const CounterSlice = createSlice({
    name : "counter",
    initialState,
    reducers : {
        increment : (state)=>{
            state.value = state.value +1
        },
        decrement : (state)=>{
            state.value = state.value -1
        }
    }
 })
 export default CounterSlice.reducer
 export const {increment,decrement} = CounterSlice.actions

     