import DateItem from '../Date/Date';
import { useState, useEffect } from 'react';
import DropdownSelect from '../Select/Select';
import TableExpense from '../TableExpense/TableExpense';
import options from '../../../optionsExpense.json';
import { ReactComponent as Calculator } from '../../../static/icons/calculator.svg';
import s from './InputProductExpense.module.css';
import { addOneExpenseTransaction } from '../../../redux/transaction/transaction-operation';
import { useDispatch, useSelector } from 'react-redux';
import { getUnixTimeStamp } from '../../../utils/unix-time';
import { getExpenseData } from '../../../services/api';
import { toast } from 'react-toastify';

export default function InputProductExpense({ setCategory }) {
  const [value, setValue] = useState('');
  const [amount, setAmount] = useState('');
  const [expenseData, setExpenseData] = useState([]);
  const [summaryData, setSummaryData] = useState([]);
  const [createItem, setCreateItem] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const today = new Date();
    const unixTimeStamps = getUnixTimeStamp(today);
    getExpenseData(unixTimeStamps.start, unixTimeStamps.end)
      .then(data => {
        setExpenseData(data.transactions);
        const dataForExpenseReport = data.transactions.map(item => ({
          month: new Date(item.date).getMonth(),
          count: item.count,
        }));
        setSummaryData(dataForExpenseReport);
        // setCreateItem(false)
      })
      .catch(err => {
        console.log(err.response);
        toast.error(`Something went wrong! Please, try one more time`);
      });
  }, []); //  в цей масив треба додати стейт createitem

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

  const onSubmitExpenseForm = e => {
    e.preventDefault();
    dispatch(
      addOneExpenseTransaction({
        description: value,
        count: (Number(amount) * 100).toString(),
        date: Math.floor(new Date().getTime() / 1000.0),
        category: { ...options },
      }),
    );
    setCreateItem(true);
    setValue('');
    setAmount('');
  };

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
