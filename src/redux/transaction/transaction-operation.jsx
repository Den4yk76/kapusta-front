import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { addIncomeTransaction, addExpenseTransaction } from '../../shared/api';

// axios.defaults.baseURL = 'http://localhost:3001/api/';

export const getReportsIncomeUser = createAsyncThunk(
  'reports/income',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('reports/income', credentials);
      //   console.log(data);
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(toast.error(`ERROR`));
    }
    return toast.success('SUCCESS');
  },
);


export const addOneIncomeTransaction = createAsyncThunk(
    'operations/income',
    async (payload, thunkAPI) => {
        try {
            const response = await addIncomeTransaction(payload)
            return response.data.result
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const addOneExpenseTransaction = createAsyncThunk(
    'operations/expense',
    async (payload, thunkAPI) => {
        try {
            const response = await addExpenseTransaction(payload)
            return response.data.result
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

