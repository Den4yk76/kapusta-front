function search(user) {
  return Object.keys(this).every(key => user[key] === this[key]);
}

export const getAllOperation = state => state.operation.operation;

export const getAllIncomePerMonth = (month, year) => state => {
  const filter = { year, month, negative: false };
  const income = getAllOperation(state).filter(search, filter).sort((prev, next) => prev.day - next.day);
  return income || [];
};
export const getAllExpensePerMonth = (month, year) => state => {
  const filter = { year, month, negative: true };
  const spend = getAllOperation(state).filter(search, filter).sort((prev, next) => prev.day - next.day);
  return spend || [];
};

export const getCurrentMonth = state => {
  const date = state.operation.date;
  return date.getMonth() + 1;
};

export const getCurrentYear = state => {
  const date = state.operation.date;
  return date.getFullYear();
};

export const getCurrentDay = state => {
  const date = state.operation.date;
  return date.getDate();
};


const operationSelectors = {
    getAllOperation,
  getAllIncomePerMonth,
  getAllExpensePerMonth,
  getCurrentMonth,
  getCurrentYear,
    getCurrentDay
};

export default operationSelectors;