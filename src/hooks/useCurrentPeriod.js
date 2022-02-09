import { useState } from 'react';

const monthNamesArr = [
  'JANUARY',
  'FEBRUARY',
  'MARCH',
  'APRIL',
  'MAY',
  'JUNE',
  'JULE',
  'AUGUST',
  'SEPTEMBER',
  'OCTOBER',
  'NOVEMBER',
  'DECEMBER',
];

const useCurrentPeriod = (monthNames = monthNamesArr) => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  const getPrevMonth = () => {
    setSelectedDate(
      prevValue =>
        new Date(prevValue.getFullYear(), prevValue.getMonth() - 1, 1),
    );
  };

  const getNextMonth = () => {
    setSelectedDate(
      prevValue =>
        new Date(prevValue.getFullYear(), prevValue.getMonth() + 1, 1),
    );
  };

  return {
    monthNames,
    selectedDate,
    getPrevMonth,
    getNextMonth,
  };
};

export default useCurrentPeriod;
