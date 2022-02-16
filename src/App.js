import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import RegistrationForm from '../src/components/RegistrationForm/RegistrationForm';
import { Route, Switch } from 'react-router-dom';
import Container from './components/Container/Container';
import { Suspense } from 'react';
import HomePage from './components/HomePage/HomePage';
import NotFoundView from './components/NotFoundView/NotFoundView';
import AppBar from './components/AppBar/AppBar';
import ExpenseIncome from './components/ExpenseIncome/ExpenseIncome/ExpenseIncome';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
// import ReportsView from './components/ReportsView/ReportsView';
import Reports from './components/Reports/Reports';
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
