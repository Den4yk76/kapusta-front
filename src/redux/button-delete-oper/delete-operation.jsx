import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const deleteData = createAsyncThunk(
    'expense/deleteData',
    async ({id, rejectWithValue }) => {
        try {
            const deletedTransaction = await axios.delete(`/api/operations/expense/${id}`);
            return deletedTransaction;
            
        } catch (error) {
            return rejectWithValue(error.message);
      }
    },
);