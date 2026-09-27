import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './menuSlice';
import cacheReducer from './cacheSlice';
import chatReducer from './chatSlice';
import playListTitleReducer from './playListTitleSlice';

const appStore = configureStore({
    reducer:{
        menu:menuReducer,
        cache:cacheReducer,
        chat:chatReducer,
        playListTitle:playListTitleReducer
    }
})

export default appStore;