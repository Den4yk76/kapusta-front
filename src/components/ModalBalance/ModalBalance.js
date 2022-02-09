import s from "./ModalBalance.module.css";

const ModalBalance = () => {
  return (
    <div className={s.modal_balance_container}>
      <p className={s.modal_balance_greaterText}>
        Привет! Для начала работы внеси текущий баланс своего счета!
    </p>
      <p className={s.modal_balance_smallerText}>
        Ты не можешь тратить деньги пока их у тебя нет :)
    </p>
    </div>
  )
}

export default ModalBalance