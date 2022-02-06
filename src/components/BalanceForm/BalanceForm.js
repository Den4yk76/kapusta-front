import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import ModalBalance from '../ModalBalance/ModalBalance';
import s from "./BalanceForm.module.css";

const BalanceForm = () => {

  const [balance, setBalance] = useState('');

  const onHandleChange = (e) => {
    setBalance(e.target.value) 
    // console.log(e.target.value)
  }
  
  // let setPlaceholder;
  // if (balance === 0) {
  //   setPlaceholder = "00.00 UAH";
  // } else {
  //   setPlaceholder = `${balance}.00 UAH`;
  // }
  
  return (
    <>
      <form className={s.balance_form_container}>
        <p>Баланс</p>
        <input
          className={s.balance_form_input}
          name="balance"
          type="number"
          id="balanceId"
          onChange={onHandleChange}
          value={`${balance}`}
          placeholder="00.00 UAH"
        />
        <button type="submit" className={s.balance_form_btn}>Подтвердить</button>
      </form>
      {!+balance && <ModalBalance /> }
    </>
  )
}

export default BalanceForm