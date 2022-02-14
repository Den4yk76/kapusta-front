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
import { operationApiSlice } from './operations/operations-slices';

// import transactionReducer from 'redux/transaction/transaction-slice'
import operationSlice from './operations/operations-old-slice';

import authSlice from './auth/auth-slice';

const middleware = [
    operationApiSlice.middleware,
    ...getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
}),
];

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token', 'isLoggedIn'],
};

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authSlice),
        operation: operationSlice,
        [operationApiSlice.reducerPath]: operationApiSlice.reducer,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});



export const persistor = persistStore(store);

