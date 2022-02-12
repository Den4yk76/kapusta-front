import DropdownSelect from '../Select/Select';
import { useState } from 'react';
import options from '../../../optionsExpense.json';
import { ReactComponent as Calculator } from '../../../static/icons/calculator.svg';
import { ReactComponent as BackBtn } from '../../../static/icons/arrow_left.svg';
import s from './ExpenseMobile.module.css';

export default function ExpenseMobile(setCategory) {
  const [value, setValue] = useState('');
  const [amount, setAmount] = useState('');

  const changeAmount = e => {
    setAmount(e.target.value);
  };

  const changeHandler = e => {
    setValue(e.target.value);
  };

  const onClearBtn = event => {
    event.preventDefault();
    setValue('');
    setAmount('');
  };

  // console.log(value);

  return (
    <>
      <button className={s.BackBtn}>
        <BackBtn />
      </button>
      <div className={s.container}>
        <div className={s.controls__container}>
          <form className={s.containerForm}>
            <div className={s.inputForm}>
              <label className={s.labelDescriptions}>
                <input
                  type="text"
                  name="name"
                  placeholder="Product description"
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
                  value={amount}
                  onChange={changeAmount}
                />
                <div className={s.calculatorIcon}>
                  <Calculator />
                </div>
              </label>
            </div>

            <div className={s.positionButton}>
              <div>
                <button
                  type="submit"
                  className={`${s.button} ${s.buttonEnter}`}
                >
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
      </div>
    </>
  );
}
