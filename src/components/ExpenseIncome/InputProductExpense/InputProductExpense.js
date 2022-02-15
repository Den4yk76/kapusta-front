import DateItem from '../Date/Date';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAddOneExpenseOperationMutation } from '../../../redux/operations/operations-slices';
import TableMobileList from '../TableMobileList/TableMobileList';
import DatePicker from '../../DatePicker/Datepicker';
import operationSelectors from '../../../redux/operations/operations-selectors';
import Operations from '../../../redux/operations/oparations-operations';
import DropdownSelect from '../Select/Select';
import TableExpense from '../TableExpense/TableExpense';
import options from '../../../optionsExpense.json';
import { ReactComponent as Calculator } from '../../../static/icons/calculator.svg';
import s from './InputProductExpense.module.css';

// render product income info
export default function InputProductExpense({
  setCategory,
  expenseData,
  summaryData,
}) {
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

  const month = useSelector(operationSelectors.getCurrentMonth);
  const year = useSelector(operationSelectors.getCurrentYear);
  const day = useSelector(operationSelectors.getCurrentDay);

  const [inputExpenseDesk, setInputExpenseDesk] = useState('');
  const [inputExpenseSum, setInputExpenseSum] = useState('');
  const [inputExpenseCategory, setInputExpenseCategory] = useState('');

  const dispatch = useDispatch();
  const operationExpense = useSelector(
    operationSelectors.getAllExpensePerMonth(month, year),
  );

  const [addOneExpenseOperation] = useAddOneExpenseOperationMutation();

  const onSubmitExpenseForm = e => {
    e.preventDefault();
    dispatch(
      addOneExpenseOperation({
        description: inputExpenseDesk,
        count: (Number(inputExpenseSum) * 100).toString(),
        date: Math.floor(new Date().getTime() / 1000.0),
        category: options.toString(),
        owner: '6205563c1dd1848fe78fdea8',
        // negative: true,
        // day,
        // month,
        // year,
      }),
    );
    setInputExpenseDesk('');
    setInputExpenseSum('');
  };

  console.log(options);

  const onInputExpenseDesk = e => {
    setInputExpenseDesk(e.currentTarget.value);
  };
  const onInputExpenseSum = e => {
    setInputExpenseSum(e.target.value);
  };
  // const onInputExpenseCategory = data => {
  //   setInputExpenseCategory(data.value);
  // };

  return (
    <div className={s.container}>
      <div className={s.controls__container}>
        <div className={s.date__container}>
          <DateItem />
        </div>
        <form className={s.containerForm} onSubmit={e => e.preventDefault()}>
          <div className={s.inputForm}>
            <label className={s.labelDescriptions}>
              <input
                type="text"
                name="name"
                placeholder="Product description"
                className={s.inputDescriptions}
                autoComplete="off"
                value={inputExpenseDesk}
                onChange={onInputExpenseDesk}
              />
            </label>
            <label className={s.labelSelect}>
              <div className={s.positionIcon}>
                <DropdownSelect setCategory={setCategory} options={options} />
              </div>
            </label>
            <label className={s.labelSum}>
              <input
                name=""
                placeholder="0.00"
                pattern="^\d+(?:[.]\d+)?(?:\d+(?:[.]\d+)?)*$"
                title=""
                autoComplete="off"
                className={s.inputSum}
                value={inputExpenseSum}
                onChange={onInputExpenseSum}
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
                onClick={onSubmitExpenseForm}
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
      <TableExpense items={expenseData} summaryData={summaryData} />
    </div>
  );
}
