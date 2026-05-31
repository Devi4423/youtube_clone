import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './menuSlice';
import cacheReducer from './cacheSlice'

const appStore = configureStore({
    reducer:{
        menu:menuReducer,
        cache:cacheReducer
    }
})

export default appStore;