import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';

export default function PublicRoute({
  children,
  restricted = false,
  ...routProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return (
    <Route {...routProps}>
      {shouldRedirect ? <Redirect to="/transaction" /> : children}
    </Route>
  );
}
