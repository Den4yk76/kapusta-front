import { createSlice } from "@reduxjs/toolkit";
import Operations from './oparations-operations';

console.log('Operations', Operations);

const initialState = {
    operation: [],
    date: new Date(),
    error: null
}

const operationSlice = createSlice({
    name: 'operation',
    initialState,
})

export default operationSlice.reducer;
export const { setDate } = operationSlice.actions