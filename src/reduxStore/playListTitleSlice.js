import { createSlice } from '@reduxjs/toolkit';

const playListTitleSlice = createSlice({
    name:"PlayListTitleSLice",
    initialState:{
        playListTitle:[],
    },
    reducers:{
        setPlayListTitle:(state,action)=>{
            state.playListTitle = [...state.playListTitle,action.payload]
        }
    }
})

export const {setPlayListTitle} = playListTitleSlice.actions;
export default playListTitleSlice.reducer;