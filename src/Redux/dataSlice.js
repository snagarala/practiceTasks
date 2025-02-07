import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
    name:'data',
    initialState:{
        items:[]
    },
    reducers:{
        setData:(state,action)=>{
            state.items = action.payload;
            console.log(action.payload,"payload");
        },
    },
});

export const {setData} = dataSlice.actions;
export default dataSlice.reducer;