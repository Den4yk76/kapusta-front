import  Operations  from '../../../redux/operations/oparations-operations';
import  operationSelectors  from '../../../redux/operations/operations-selectors';
import { useDispatch, useSelector } from 'react-redux';
import DateItem from "../Date/Date";
import DropdownSelect from "../Select/Select";
import TableExpense from "../TableExpense/TableExpense";
import options from "../../../optionsExpense.json"
import TableMobileList from "../TableMobileList/TableMobileList";
import { ReactComponent as Calculator } from '../../../static/icons/calculator.svg';
import s from "./InputProductExpense.module.css";
import { useState } from 'react';
import DatePicker from '../../DatePicker/Datepicker';
import { useAddOneExpenseOperationMutation } from '../../../redux/operations/operations-slices';

export default function InputProductExpense(setCategory) {

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

  const [addOneExpenseOperation, ] = useAddOneExpenseOperationMutation();
  
  const onSubmitExpenseForm = e => {
    e.preventDefault();
    dispatch(
      addOneExpenseOperation({
        description: inputExpenseDesk,
        count: Number(inputExpenseSum) * 100,
        date: `${day}.${month}.${year}`,
        category: { ...options },
        // negative: true,
        // day,
        // month,
        // year,
      }),
    );
    setInputExpenseDesk('');
    setInputExpenseSum('');
    setInputExpenseSum('');
  };
  
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
        <TableMobileList />
          <form className={s.containerForm} onSubmit={(e)=> e.preventDefault()} >
          <div className={s.inputForm}>
            <label className={s.labelDescriptions}>
                <input
                  type="text"
                  value={inputExpenseDesk}
                  onChange={onInputExpenseDesk}
                  placeholder='Expense description'
                  name=''
                  className={s.inputDescriptions}
                  autoComplete="off"
                />
            </label>
            <label className={s.labelSelect}>
            <div className={s.positionIcon}>
                <DropdownSelect setCategory={setCategory} options={options} />
              </div>
              </label>
            <label className={s.labelSum}>
              <input
                name=''
                placeholder="0.00"
                pattern="^\d+(?:[.]\d+)?(?:\d+(?:[.]\d+)?)*$"
                title=""
                autoComplete="off"
                className={s.inputSum}
                id="input-example"
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
                  className={`${s.button} ${s.buttonClear}`}
                >
                  CLEAR
                </button>
              </div>
            </div>
          </form>
          </div>
          <TableExpense />
        </div>
    )
}