import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Suspense, React, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import Container from './components/Container/Container';
//import RegistrationForm from '../src/components/RegistrationForm/RegistrationForm';
//import HomePage from './components/HomePage/HomePage';
//import NotFoundView from './components/NotFoundView/NotFoundView';
//import AppBar from './components/AppBar/AppBar';
//import ExpenseIncome from './components/ExpenseIncome/ExpenseIncome/ExpenseIncome';
//import Reports from './components/Reports/Reports';

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
  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <AppBar />
        <Container>
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
        </Container>
        <ToastContainer autoClose={3000} />
      </Suspense>
    </>
  );
}

export default App;
