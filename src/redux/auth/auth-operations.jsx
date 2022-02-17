import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from "react-toastify";
import { token } from '../../shared/axios';

export const register = createAsyncThunk('/signup', async (credentials, { rejectWithValue }) => {
    try {
        const { data } = await axios.post('/api/users/signup', credentials);
        console.log(data);
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(
        toast.error(`Something went wrong! Please, try one more time`),
      );
    }
    return toast.success('You have sign up successfully!');
  },
);

export const logIn = createAsyncThunk('/login', async (credentials, { rejectWithValue }) => {
    try {
        const { data } = await axios.post('/api/users/login', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
      return rejectWithValue(toast.error(`Wrong email address or password!`));
    }
  },
);

export const logOut = createAsyncThunk('users/logout', async (_, { rejectWidthValue }) => {
    try {
        await axios.post('/api/users/logout');
        token.unset();
    } catch (error) {
        rejectWidthValue(error.message);
        
    }
});

export const setBalanceUser = createAsyncThunk(
  'operations/balance',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch('/api/operations/balance', credentials);

      console.log(data);
      console.log(credentials);
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(toast.error(`Please enter correct data!`));
    }
    return toast.success('Your balance has been successfully saved!');
  },
);

