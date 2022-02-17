import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Suspense, React, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from './redux/auth/auth-operations';
import authSelectors from './redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const Container = lazy(() => import('./components/Container/Container'));
const HomePage = lazy(() => import('./components/HomePage/HomePage'));
const NotFoundView = lazy(() =>
  import('./components/NotFoundView/NotFoundView'),
);
const AppBar = lazy(() => import('./components/AppBar/AppBar'));
const ExpenseIncome = lazy(() =>
  import('./components/ExpenseIncome/ExpenseIncome/ExpenseIncome'),
);
const Reports = lazy(() => import('./components/Reports/Reports'));
const RegistrationForm = lazy(() =>
  import('../src/components/RegistrationForm/RegistrationForm'),
);

function App() {
  const dispatch = useDispatch();
  const isFetchingUser = useSelector(authSelectors.isFetchingUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <AppBar />
        <Container>
          {isFetchingUser ? (
            <h2>Load everything</h2>
          ) : (
            <Switch>
              <PublicRoute exact path="/">
                <HomePage />
              </PublicRoute>
              <PublicRoute path="/authentication" restricted>
                <RegistrationForm />
              </PublicRoute>
              <PrivateRoute path="/transaction">
                <ExpenseIncome />
              </PrivateRoute>
              <PrivateRoute exact path="/reports">
                <Reports />
              </PrivateRoute>
              <Route path="*">
                <NotFoundView />
              </Route>
            </Switch>
          )}
        </Container>
        <ToastContainer autoClose={3000} />
      </Suspense>
    </>
  );
}

export default App;
