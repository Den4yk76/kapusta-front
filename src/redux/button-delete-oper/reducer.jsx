import {createSlice } from "@reduxjs/toolkit";
import { deleteData } from "./delete-operation";

const dataSlice = createSlice({
    name: 'expense',
    initialState: {
        expense: [],
        loading: false,
        error: null,
    },
    extraReducers: {
        [deleteData.pending]: (state, action) => ({
            ...state, loading: true,
        }),
        [deleteData.fulfilled]: (state, action) => ({
           ...state, expense: state.expense.filter(({ id }) => id !== action.payload),
            loading: false,
        }),
        [deleteData.rejected]: (state, action) => ({
            ...state, loading: false, error: action.payload,
        }),
    }
});

export default  dataSlice.reducer;
