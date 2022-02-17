import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  setBalanceUser,
  fetchCurrentUser,
} from './auth-operations';

const initialState = {
  user: { password: null, email: null, balance: '' },
  token: null,
  isLoggedIn: false,
  isFetchingUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      
    },

    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state, _) {
      state.user = { password: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [setBalanceUser.fulfilled](state, action) {
      state.user = action.payload.user.balance;
    },
    [fetchCurrentUser.fulfilled](state, { payload }) {
      state.user = { ...payload };
      state.isLoggedIn = true;
      state.isFetchingUser = false;
    },
  },
});

export default authSlice.reducer;
