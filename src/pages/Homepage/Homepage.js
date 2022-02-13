import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { Link } from 'react-router-dom';
import authSelectors from '../../redux/auth/auth-selectors';
import ExpenseIncome from '../ExpenseIncome/ExpenseIncome/ExpenseIncome';
// import Balance from '../../components/Balance/Balance';
// import Summary from '../../components/Summary/Summary'; //; -- лишний вызов, оно исопльзуется уже в ExpenseIncome.JS
import { useSelector } from 'react-redux';
import s from './Homepage.module.css';
import TableMobileList from '../ExpenseIncome/TableMobileList/TableMobileList';

export default function HomePage() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <div className={s.mobile}>
        <Link to="/authentication">{!isLoggedIn && <RegistrationForm />}</Link>
        {/* <Link to="/">
          {isLoggedIn && (
            <>
              <Balance />
              <Summary />
            </>
          )}
        </Link> */}

        <Link to="/expense">{isLoggedIn && <ExpenseIncome />}</Link>
      </div>

      <div className={s.nomobile}>
        <Link to="/authentication">{!isLoggedIn && <RegistrationForm />}</Link>
        {/* {isLoggedIn && <TableMobileList />} */}
        <Link to="/expense">{isLoggedIn && <ExpenseIncome />}</Link>
      </div>
    </>
  );
}
