import { createSlice } from "@reduxjs/toolkit";

const initialState={
    userdata:[],
    clintdata:[],
    clintactive:true
}


export const helpdeskSlice=createSlice({
    name:'helpdesk',
    initialState,
    reducers:{
         getuserdata:(state,action)=>{
            state.userdata .push(action.payload)
         },

         getclintdata:(state,action)=>{
            state.clintdata.push(action.payload)
         },
         
         getclintactive:(state,action)=>{
            state.clintactive = action.payload;
         }

    }
});

export const{getuserdata,getclintactive,getclintdata}=helpdeskSlice.actions;

export default helpdeskSlice.reducer;