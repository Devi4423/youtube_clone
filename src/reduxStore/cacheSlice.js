import { createSlice} from '@reduxjs/toolkit'

const cacheSlice = createSlice({
    name:"cacheSlice",
    initialState:{},
    reducers:{
        cacheResults:(state,action)=>{
           return {...state, ...action.payload};
        }
    }
});

export const {cacheResults} = cacheSlice.actions;

export default cacheSlice.reducer;

/***
 * cacheSlice = {
 *      {r:[react,react,react,react]},
 *      {re:[react,react,react,react]},
 *      {rea:[react,react,react,react]},
 *      {reac:[react,react,react,react]},
 *      {react:[react,react,react,react]},
 * }
 */