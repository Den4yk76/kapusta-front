import axios from 'axios';

export const getIncomeData = async (unixStart, unixEnd) => {
  const { data } = await axios.get(
    `api/reports/income?unixStart=${unixStart}&unixEnd=${unixEnd}`,
  );
  return data;
};

export const getExpenseData = async (unixStart, unixEnd) => {
  const { data } = await axios.get(
    `api/reports/expense?unixStart=${unixStart}&unixEnd=${unixEnd}`,
  );
  return data;
};

// export const getMonthStatistic = async (unixStart, unixEnd, category) => {
//   const { data } = await axios.get(
//     `/api/reports/month-transactions?unixStart=${unixStart}&unixEnd=${unixEnd}&category=${category}`,
//   );
//   return data;
// };

export const getMonthAmount = async (unixStart, unixEnd) => {
  const { data } = await axios.get(
    `/api/reports/month-amounts?unixStart=${unixStart}&unixEnd=${unixEnd}`,
  );
  return data;
};

////income/expense//////
export async function addIncomeTransaction(incomeData) {
  const { data } = await axios.post(`/api/operations/income`, incomeData);
  return data;
}

export async function addExpenseTransaction(expenseData) {
  const { data } = await axios.post(`/api/operations/expense`, expenseData);
  return data;
}

// change month-transactions in controls
