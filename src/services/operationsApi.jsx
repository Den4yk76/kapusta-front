import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3001/api/users";

export async function addOperation(incomeData) {
    const { data } = await axios.post(`/income`, incomeData);
    return data;
}

export async function deleteOperationById(transactionId) {
    await axios.delete(`/income/${transactionId}`);
}
