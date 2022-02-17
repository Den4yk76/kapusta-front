import RegistrationForm from '../RegistrationForm/RegistrationForm';
import { Link } from 'react-router-dom';
import authSelectors from '../../redux/auth/auth-selectors';
import ExpenseIncome from '../ExpenseIncome/ExpenseIncome/ExpenseIncome';
import { useSelector } from 'react-redux';
import s from './style.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from '../../redux/auth/auth-operations';
// import TableMobileList from '../ExpenseIncome/TableMobileList/TableMobileList';

export default function HomePage() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <div className={s.mobile}>
        <Link to="/authentication">{!isLoggedIn && <RegistrationForm />}</Link>
        <Link to="/transaction">{isLoggedIn && <ExpenseIncome />}</Link>
      </div>

      <div className={s.nomobile}>
        <Link to="/authentication">{!isLoggedIn && <RegistrationForm />}</Link>
        <Link to="/transaction">{isLoggedIn && <ExpenseIncome />}</Link>
      </div>
    </>
  );
}
