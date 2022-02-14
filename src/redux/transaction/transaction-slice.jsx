import { createSlice } from '@reduxjs/toolkit';
import { getReportsIncomeUser } from './transaction-operation';

const initialState = {
  transaction: [],
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  extraReducers: {
    [getReportsIncomeUser.fulfilled](state, action) {
      //   console.log(action);
    },
  },
});

export default transactionSlice.reducer;
