const initialState = {
  user: {
    email: '',
    jwt: ''
  },
  date: {
    currentDate: 'текущая дата в Unix',
    currentPeriod: {
      from: 'первая сек месяца',
      to: 'первая сек следующего месяца',
    },
  },
  db: {
    balance: 0,
    summaryExpense: [
      {
        month: 'первая сек месяца',
        sum: 'сумма за месяц',
      },
      {
        month: 'первая сек прошлого месяца',
        sum: 'сумма за месяц',
      },
    ],
    summaryIncome: [
      {
        month: 'первая сек месяца',
        sum: 'сумма за месяц',
      },
      {
        month: 'первая сек прошлого месяца',
        sum: 'сумма за месяц',
      },
    ],
    costs: [
      // {
      //   id: ''
      //   date: в Unix
      //   describe: 
      //   category: 
      //   sum: 
      // }
    ],
    profits: [
      // {
      //   id: ''
      //   date: в Unix
      //   category:
      //   describe:
      //   sum:
      // },
    ],
  },
};

export default initialState;
