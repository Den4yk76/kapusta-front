import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import dataSlice from './button-delete-oper/reducer'
import authSlice from './auth/auth-slice';
import transactionReducer from './transaction/transaction-slice';
import { transactionApiSlice } from './transaction/transaction-slice';

const middleware = [
  transactionApiSlice.middleware,
  ...getDefaultMiddleware({
    serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          ignoredActionPaths: [`transaction.error`, `payload`, `meta.baseQueryMeta.request`, `meta.baseQueryMeta.response` ],
      ignoredPaths: [`payload`, `transaction.error`, `meta.baseQueryMeta.response`, `meta.baseQueryMeta.request`],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authSlice),
  transaction: transactionReducer,
  expense: dataSlice,
  [transactionApiSlice.reducerPath]: transactionApiSlice.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
