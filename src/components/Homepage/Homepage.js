import RegistrationForm from '../RegistrationForm/RegistrationForm';
import { Link } from 'react-router-dom';
import authSelectors from '../../redux/auth/auth-selectors';
import Balance from '../Balance/Balance';
import ExpenseIncome from '../ExpenseIncome/ExpenseIncome/ExpenseIncome';
// import Summary from '../Summary/Summary'; -- лишний вызов, оно исопльзуется уже в ExpenseIncome.JS
import { useSelector } from 'react-redux';
import s from './Homepage.module.css';
// import TableMobileList from '../ExpenseIncome/TableMobileList/TableMobileList';

export default function HomePage() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <div className={s.mobile}>
        <Link to="/authentication">{!isLoggedIn && <RegistrationForm />}</Link>
        {/* треба видалити!!
        <Link to="/">
        {isLoggedIn && (
          <>
            <Balance />
          </>
        )}
      </Link> */}
        <Link to="/expense">{isLoggedIn && <ExpenseIncome />}</Link>
      </div>

      <div className={s.nomobile}>
        <Link to="/authentication">{!isLoggedIn && <RegistrationForm />}</Link>
        <Link to="/expense">{isLoggedIn && <ExpenseIncome />}</Link>
      </div>
    </>
  );
}
