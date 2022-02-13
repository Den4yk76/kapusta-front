import RegistrationForm from '../RegistrationForm/RegistrationForm';
import { Link } from 'react-router-dom';
import authSelectors from '../../redux/auth/auth-selectors';
import Balance from '../Balance/Balance';
import ExpenseIncome from '../ExpenseIncome/ExpenseIncome/ExpenseIncome';
import Summary from '../Summary/Summary';
import { useSelector } from 'react-redux';

export default function HomePage() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
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
    </>
  );
}
