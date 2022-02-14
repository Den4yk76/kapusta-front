import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const operationApiSlice = createApi({
  reducerPath: 'operationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    addOneOperation: builder.mutation({
      query: (payload) => ({
        url: 'operations/income',
        method: 'POST',
        body: payload,
      }),
      transformResponse: (response) => response.data.result
    }),
     removeOneOperation: builder.mutation({
      query: (id) => ({
        url: `operations/income/${id}`,
        method: 'DELETE',
      })
     }),
     addOneExpenseOperation: builder.mutation({
      query: (payload) => ({
        url: 'operations/expense',
        method: 'POST',
        body: payload,
      }),
      transformResponse: (response) => response.data.result
    }),
     removeOneExpenseOperation: builder.mutation({
      query: (id) => ({
        url: `operations/expense/${id}`,
        method: 'DELETE',
      })
     }),
  }),
})

export const { useAddOneOperationMutation, useRemoveOneOperationMutation, useAddOneExpenseOperationMutation, useRemoveOneExpenseOperationMutation } = operationApiSlice