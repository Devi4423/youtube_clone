import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './menuSlice';
import cacheReducer from './cacheSlice';
import chatReducer from './chatSlice';

const appStore = configureStore({
    reducer:{
        menu:menuReducer,
        cache:cacheReducer,
        chat:chatReducer
    }
})

export default appStore;