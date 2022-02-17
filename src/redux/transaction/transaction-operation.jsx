import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { addIncomeTransaction, addExpenseTransaction } from '../../services/api';

export const getReportsIncomeUser = createAsyncThunk(
  'reports/income',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('reports/income', credentials);
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(toast.error(`ERROR`));
    }
    return toast.success('SUCCESS');
  },
);


export const addOneIncomeTransaction = createAsyncThunk(
    'operations/addOne',
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
    'operations/removeOne',
  async (payload, thunkAPI) => {
      console.log('payload', payload)
      try {
        const response = await addExpenseTransaction(payload)
        console.log('!!!', response.data.result);
        return response.data.result
      } catch (error) {
          return thunkAPI.rejectWithValue(error)
      }
    }
)

