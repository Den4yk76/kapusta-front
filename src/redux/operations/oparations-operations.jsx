import { createAsyncThunk, createAction } from '@reduxjs/toolkit'
import * as operationAPI from '../../services/operationsApi'

const addOneOperation = createAsyncThunk(
    'income/addOne',
    async (payload, thunkAPI) => {
        try {
            const response = await operationAPI.addOperation(payload)

            return response.data.result
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)
const removeOneOperation = createAsyncThunk(
    'income/removeOne',
    async (payload, thunkAPI) => {
        try {
            await operationAPI.deleteOperationById(payload)
            return payload
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)
const setDate = createAction('Set_date');

const Operations = {
    addOneOperation,
    removeOneOperation,
    setDate
};
export default Operations;
