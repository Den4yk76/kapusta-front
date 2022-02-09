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
      <Link to="/">
        {!isLoggedIn ? (
          <>
            <RegistrationForm />
          </>
        ) : (
          <></>
        )}
      </Link>
      <Link to="/expense">
        <Balance />
        <ExpenseIncome />
        <Summary />
      </Link>
      <Link to="/income">
        <ExpenseIncome />
      </Link>
    </>
  );
}
