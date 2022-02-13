import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'http://localhost:3001/api/';

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
