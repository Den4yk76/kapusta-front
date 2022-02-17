import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
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

// Define a service using a base URL and expected endpoints
export const transactionApiSlice = createApi({
  reducerPath: 'transactionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://kapusta-back-end.herokuapp.com/api/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),

  endpoints: (builder) => ({
    getExpenseTransactions: builder.query({
      query: () => ({
        url: `reports/expense?unixStart=0&unixEnd=${Math.floor(Date.now() / 1000)}`,
        method: 'GET',
      }),
      transformResponse: (response) => response.transactions,
    }),
    getIncomeTransactions: builder.query({
      query: () => ({
        url: `reports/income?unixStart=0&unixEnd=${Math.floor(Date.now() / 1000)}`,
        method: 'GET',
      }),
      transformResponse: (response) => response.transactions,
    }),
     getTestTransactions: builder.query({
      query: () => ({
        url: `reports/month-amounts?unixStart=0&unixEnd=${Math.floor(Date.now() / 1000)}`,
        method: 'GET',
      }),
      // transformResponse: (response) => response.transactions,
    }),
  }),
})

export const { useGetExpenseTransactionsQuery, useGetIncomeTransactionsQuery, useGetTestTransactionsQuery } = transactionApiSlice

export default transactionSlice.reducer;



