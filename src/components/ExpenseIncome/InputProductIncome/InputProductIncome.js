import DateItem from '../Date/Date';
import { useState } from 'react';
import Select from 'react-select';
import { ReactComponent as Calculator } from '../../../static/icons/calculator.svg';
import TableIncome from '../TableIncome/TableIncome';
import options from '../../../optionsIncome.json';
import s from './InputProductIncome.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useAddOneOperationMutation } from '../../../redux/operations/operations-slices';
import TableMobileList from "../TableMobileList/TableMobileList";
import DatePicker from '../../DatePicker/Datepicker';
import  operationSelectors  from '../../../redux/operations/operations-selectors'
import DropdownSelect from "../Select/Select";
import Operations from '../../../redux/operations/oparations-operations';

export default function InputProductIncome(setCategory) {
  const [value, setValue] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const changeValue = e => {
    setValue(e.target.value);
  };

  const changeAmount = e => {
    setAmount(e.target.value);
  };

  const changeDescription = e => {
    setDescription(e.target.value);
  };

  const onClearBtn = event => {
    event.preventDefault();
    setValue('');
    setAmount('');
    setDescription('');
  };

  const month = useSelector(operationSelectors.getCurrentMonth);
  const year = useSelector(operationSelectors.getCurrentYear);
  const day = useSelector(operationSelectors.getCurrentDay);

  const [inputIncomeDesk, setInputIncomeDesk] = useState('');
  const [inputIncomeSum, setInputIncomeSum] = useState('');
  const [inputIncomeCategory, setInputIncomeCategory] = useState('');

  const dispatch = useDispatch();
  const operationIncome = useSelector(
    operationSelectors.getAllIncomePerMonth(month, year),
  );

  const [addOneOperation,] = useAddOneOperationMutation();

  const onSubmitIncomeForm = e => {
    e.preventDefault();
    dispatch(
      addOneOperation({
        description: inputIncomeDesk,
        count: (Number(inputIncomeSum) * 100).toString(),
        date: Math.floor(new Date().getTime()/1000.0), 	
        category: options.toString(),
        owner: '6205563c1dd1848fe78fdea8'
        // negative: true,
        // day,
        // month,
        // year,
      }),
    );
    setInputIncomeCategory('');
    setInputIncomeDesk('');
    setInputIncomeSum('');
  };

  const onInputIncomeDesk = e => {
    setInputIncomeDesk(e.currentTarget.value);
  };
  const onInputIncomeSum = e => {
    setInputIncomeSum(e.target.value);
  };
  // const onInputIncomeCategory = data => {
  //   setInputExpenseCategory(data.value);
  // };

  return (
   <div className={s.container}>
      <div className={s.controls__container}>
        <div className={s.date__container}>
          <DateItem />
        </div>
        <form className={s.containerForm} onSubmit={(e)=> e.preventDefault()}>
          <div className={s.inputForm}>
            <label className={s.labelDescriptions}>
              <input
                type="text"
                name="name"
                placeholder="Income Description"
                className={s.inputDescriptions}
                autoComplete="off"
                value={inputIncomeDesk}
                onChange={onInputIncomeDesk}
              />
            </label>
            <label className={s.labelSelect}>
              <div className={s.positionIcon}>
                <DropdownSelect
                   value={description}
                  setCategory={changeDescription}
                  options={options}
                />
              </div>
            </label>
            <label className={s.labelSum}>
              <input
                name="sum"
                placeholder="0.00"
                pattern="^\d+(?:[.]\d+)?(?:\d+(?:[.]\d+)?)*$"
                title=""
                value={inputIncomeSum}
                autoComplete="off"
                className={s.inputSum}
                onChange={onInputIncomeSum}
              />
              <div className={s.calculatorIcon}>
                <Calculator />
              </div>
            </label>
          </div>
          <div className={s.positionButton}>
            <div>
              <button type="submit" className={`${s.button} ${s.buttonEnter}`} onClick={onSubmitIncomeForm}>
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
  )
}

