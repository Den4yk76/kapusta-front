import Header from '../Header/Header';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import HeaderIsLoggedIn from '../Header/HeaderIsLoggedIn';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return <>{isLoggedIn ? <HeaderIsLoggedIn /> : <Header />}</>;
}
