import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru';

import { ReactComponent as Calendar } from '../../static/icons/calendar.svg';
import s from '../DatePicker/Datepicker.module.css';
import { useDispatch, useSelector } from 'react-redux';
import  Operations from '../../redux/operations/oparations-operations';

registerLocale('ru', ru);

function Datepicker() {
  const storeDate = useSelector(state => state.operation.date);
  const [selectedDate, setSelectedDate] = useState(storeDate);
  // const selectedDay = selectedDate.getDate();
  // const selectedMonth = selectedDate.getMonth() + 1;
  // const selectedYear = selectedDate.getFullYear();
  const dispatch = useDispatch()

  function handleSelect(date) {
    // setSelectedDate(date);

    dispatch(Operations.setDate(date));
  }
  return (
    <div className={s.wrapper}>
      <Calendar className={s.calendarSvg} width="20px" height="20px" />
      <div className="">
        <DatePicker
          dateFormat="dd.MM.yyyy"
          selected={selectedDate}
          onSelect={setSelectedDate}
          onChange={handleSelect}
          className={s.date}
          maxDate={new Date()}
          locale="ru"
        />
      </div>
    </div>
  );
}

export default Datepicker;