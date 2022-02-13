import { configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import dataSlice from './button-delete-oper/reducer'
import authSlice from './auth/auth-slice';

const middleware = [...getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
}),
];

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
        expense:dataSlice,
        auth:persistReducer(authPersistConfig, authSlice),
       
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});



export const persistor=persistStore(store);