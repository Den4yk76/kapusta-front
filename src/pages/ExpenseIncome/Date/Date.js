import React, { useState, useEffect, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as Calendar } from '../../../static/icons/calendar.svg';
import s from "./Date.module.css"

export default function DateItem() {
    const [startDate, setStartDate] = useState(new Date());

    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button
      className={s.DatePicker}
      onClick={onClick}
      ref={ref}
    >
      {value}
    </button>
  ));

    return (
      <div className={s.dateForm}>
        <div className={`${s.calendarOverley} ${s.DatePicker}`}>
          <label htmlFor="datePicker" className={s.lableCursor}>
            <Calendar className={s.icon__calendar} />
          </label>

          <DatePicker
            customInput={<ExampleCustomInput />}
            closeOnScroll={true}
            selected={startDate}
            onChange={date => setStartDate(date)}
            dateFormat="dd.MM.yyyy"
            minDate={new Date('05-02-2021')}
            maxDate={new Date()}
          />
        </div>
      </div>
    )
}