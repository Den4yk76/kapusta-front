import DateItem from '../Date/Date';
import { useState, useEffect } from 'react';
import { ReactComponent as Calculator } from '../../../static/icons/calculator.svg';
import TableIncome from '../TableIncome/TableIncome';
import options from '../../../optionsIncome.json';
import s from './InputProductIncome.module.css';
import { getUnixTimeStamp } from '../../../shared/unix-time';
import { getIncomeData } from '../../../shared/api';
import { toast } from 'react-toastify';
import DropdownSelect from '../Select/Select';
import { addOneIncomeTransaction } from '../../../redux/transaction/transaction-operation';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
// import { testData } from '../../../shared/test-data';

export default function InputProductIncome({ setCategory, data }) {
  const [value, setValue] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [incomeData, setIncomeData] = useState([]);
  const [summaryData, setSummaryData] = useState([]);

  useEffect(() => {
    const today = new Date();
    const unixTimeStamps = getUnixTimeStamp(today);
    getIncomeData(unixTimeStamps.start, unixTimeStamps.end)
      .then(data => {
        setIncomeData(data.transactions);
        const dataForIncomeReport = data.transactions.map(item => ({
          month: new Date(item.date).getMonth(),
          count: item.count,
        }));
        setSummaryData(dataForIncomeReport);
      })
      .catch(err => {
        console.log(err.response);
        toast.error(`Something went wrong! Please, try one more time`);
      });
  }, []);

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

  const dispatch = useDispatch();

  const onSubmitIncomeForm = e => {
    e.preventDefault();
    dispatch(
      addOneIncomeTransaction({
        description: value,
        count: (Number(amount) * 100).toString(),
        date: Math.floor(new Date().getTime() / 1000.0),
        category: { ...options },
        owner: '6205563c1dd1848fe78fdea8',
      }),
    );
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
                placeholder="Income Description"
                className={s.inputDescriptions}
                autoComplete="off"
                value={value}
                onChange={changeValue}
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
                value={amount}
                autoComplete="off"
                className={s.inputSum}
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
                onClick={onSubmitIncomeForm}
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
      <TableIncome items={incomeData} summaryData={summaryData} />
    </div>
  );
}
