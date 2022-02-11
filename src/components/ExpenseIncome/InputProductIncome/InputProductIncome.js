import DateItem from '../Date/Date';
import { useState } from 'react';
import DropdownSelect from '../Select/Select';
import { ReactComponent as Calculator } from '../../../static/icons/calculator.svg';
import TableIncome from '../TableExpense/TableExpense';
import options from '../../../optionsIncome.json';
import s from './InputProductIncome.module.css';

export default function InputProductIncome(setCategory) {
  const [value, setValue] = useState('');

  const changeHandler = e => {
    setValue(e.target.value);
  };

  const onClearBtn = event => {
    event.preventDefault();
    setValue('');
  };

  // console.log(value);

  return (
    <div className={s.container}>
      <div className={s.controls__container}>
        <div className={s.date__container}>
          <DateItem />
        </div>
        <form className={s.containerForm}>
          <div className={s.inputForm}>
            <label className={s.labelDescriptions}>
              <input
                type="text"
                name="name"
                placeholder="Income Description"
                className={s.inputDescriptions}
                autoComplete="off"
                value={value}
                onChange={changeHandler}
              />
            </label>
            <label className={s.labelSelect}>
              <div className={s.positionIcon}>
                <DropdownSelect setCategory={setCategory} options={options} />
              </div>
            </label>
            <label className={s.labelSum}>
              <input
                name="sum"
                placeholder="0.00"
                pattern="^\d+(?:[.]\d+)?(?:\d+(?:[.]\d+)?)*$"
                title=""
                autoComplete="off"
                className={s.inputSum}
              />
              <div className={s.calculatorIcon}>
                <Calculator />
              </div>
            </label>
          </div>

          <div className={s.positionButton}>
            <div>
              <button type="submit" className={`${s.button} ${s.buttonEnter}`}>
                ENTER
              </button>
            </div>
            <div>
              <button
                type="button"
                onClick={onClearBtn}
                className={`${s.button} ${s.buttonClear}`}
              >
                CLEAR
              </button>
            </div>
          </div>
        </form>
      </div>
      <TableIncome />
    </div>
  );
}