import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const deleteData = createAsyncThunk(
    'expense/deleteData',
    async (incomeId, { rejectWithValue }) => {
        try {
            const { data: { id } } = await axios.delete(`http://localhost:3001/api/operations/income/`, {
                
                headers: {
                    Authorization: `Bearer: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDkwODU2ZWViMTU2YzRkNzVlNWRmOCIsImlhdCI6MTY0NDc2MzExNywiZXhwIjoxNjQ0ODA2MzE3fQ.xa5oKKN3-rQAYsDJlIAtqNalP9iGaCaXHFP5vsaRngs`
            }
            }

            );
            return id;
        } catch (error) {
            return rejectWithValue(error.message);
      }
    },
);