import DateItem from "../Date/Date";
import DropdownSelect from "../Select/Select";
import TableExpense from "../TableExpense/TableExpense";
import { ReactComponent as Calculator } from '../../../static/icons/calculator.svg';
import s from "./InputProductExpense.module.css"

const options = [
  { value: 'transport', label: 'Transport' },
  { value: 'products', label: 'Products' },
  { value: 'health', label: 'Health' },
  { value: 'alcohol', label: 'Alcohol' },
  { value: 'entertainment', label: 'Entertainment' },
  { value: 'housing', label: 'Housing' },
  { value: 'technique', label: 'Technique' },
  { value: 'utilityCommunication', label: 'Utility, Communication' },
  { value: 'sportsHobbies', label: 'Sports, Hobbies' },
  { value: 'education', label: 'Education' },
  { value: 'other', label: 'Other' },
];

export default function InputProductExpense(setCategory) {

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