import { useState } from 'react';
import  operationSelectors  from '../../../redux/operations/operations-selectors';
import { useDispatch, useSelector } from 'react-redux';
import DateItem from "../Date/Date";
import DropdownSelect from "../Select/Select";
import { ReactComponent as Calculator } from '../../../static/icons/calculator.svg';
import TableIncome from "../TableIncome/TableIncome";
import options from "../../../optionsIncome.json";
import s from "./InputProductIncome.module.css";
import { useAddOneOperationMutation } from '../../../redux/operations/operations-slices';
import Operations from '../../../redux/operations/oparations-operations';
import TableMobileList from "../TableMobileList/TableMobileList";
import DatePicker from '../../DatePicker/Datepicker';

export default function InputProductIncome(setCategory) {

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

  const [addOneOperation, ] = useAddOneOperationMutation();

  const onSubmitIncomeForm = e => {
    e.preventDefault();
    dispatch(
      addOneOperation({
        description: inputIncomeDesk,
        count: Number(inputIncomeSum) * 100,
        date: `${day}.${month}.${year}`,
        category: {...options},
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
          {/* <DatePicker/> */}
        </div>
        <TableMobileList />
          <form className={s.containerForm} onSubmit={(e)=> e.preventDefault()}>
          <div className={s.inputForm}>
            <label className={s.labelDescriptions}>
                <input
                  type="text"
                  name=''
                  value={inputIncomeDesk}
                  onChange={onInputIncomeDesk}
                  placeholder="Income Description"
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
                value={inputIncomeSum}
                onChange={onInputIncomeSum}
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
                onClick={onSubmitIncomeForm}
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
          <TableIncome />
        </div>
    )
}