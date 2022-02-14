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
