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
import dataSlice from './button-delete-oper/reducer';
import authSlice from './auth/auth-slice';
import transactionReducer from './transaction/transaction-slice';
import { operationApiSlice } from './operations/operations-slices';
// import transactionReducer from 'redux/transaction/transaction-slice'
import operationSlice from './operations/operations-old-slice';

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

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authSlice),
  transaction: transactionReducer,
  expense:dataSlice,
  operation: operationSlice,
  [operationApiSlice.reducerPath]: operationApiSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

