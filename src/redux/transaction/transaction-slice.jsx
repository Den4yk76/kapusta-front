import { createSlice } from '@reduxjs/toolkit';
import {
  getReportsIncomeUser,
  addOneIncomeTransaction,
  addOneExpenseTransaction
} from './transaction-operation';

const initialState = {
  transaction: [],
  error: null
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  extraReducers: {
    [getReportsIncomeUser.fulfilled](state, action) {
      //   console.log(action);
    },
    [addOneIncomeTransaction.fulfilled](state, { payload }) {
      state.transaction = [...state.transaction, payload]
      state.error = null
    },
    [addOneIncomeTransaction.rejected](state, { payload }) {
      state.error = payload
    },
    [addOneExpenseTransaction.fulfilled](state, { payload }) {
      state.transaction = [...state.transaction, payload]
      state.error = null
    },
    [addOneExpenseTransaction.rejected](state, { payload }) {
      state.error = payload
    },
  },
});


export default transactionSlice.reducer;
