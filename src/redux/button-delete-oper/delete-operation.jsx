import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const deleteData = createAsyncThunk(
    'expense/deleteData',
    async (expenseId, { rejectWithValue }) => {
        try {
            const { data: { id } } = await axios.delete(`http://localhost:3001/api/operations/expense/`);
            return id;
        } catch (error) {
            return rejectWithValue(error.message);
      }
    },
);