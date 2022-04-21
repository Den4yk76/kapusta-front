import s from "./ModalBalance.module.css";

const ModalBalance = () => {
  return (
    <div className={s.modal_balance_container}>
      <p className={s.modal_balance_greaterText}>
        Hey! To get started, enter the current balance of your account!
    </p>
      <p className={s.modal_balance_smallerText}>
        You can't spend money until you have it :)
    </p>
    </div>
  )
}

export default ModalBalance
