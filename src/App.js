import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Switch } from 'react-router-dom';
//import Balance from './components/Balance/Balance';
//import RegistrationForm from '../src/components/RegistrationForm/RegistrationForm';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
//import Summary from './components/Summary/Summary';
// import Hero from './components/Hero/Hero';
//import ExpenseIncome from './components/ExpenseIncome/ExpenseIncome/ExpenseIncome';
import { Suspense } from 'react';
import HomePage from './components/Homepage/Homepage';
import NotFoundView from './components/NotFoundView/NotFoundView';
import AppBar from './components/AppBar/AppBar';
import ExpenseIncome from './components/ExpenseIncome/ExpenseIncome/ExpenseIncome';
import LoginView from './components/LoginView/LoginView';
import RegisterView from './components/RegisterView/RegisterView';
import PrivatRoute from './components/PrivatRoute';
import PublicRoute from './components/PublicRoute';

function App() {
  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <AppBar />
        <Container>
          <Switch>
            <PrivatRoute exact path="/">
              <HomePage />
            </PrivatRoute>
            <PublicRoute
              exact
              path="/register"
              redirectTo="/expense"
              restricted
            >
              <RegisterView />
            </PublicRoute>
            <PublicRoute path="/login" redirectTo="/expense" restricted>
              <LoginView />
            </PublicRoute>
            <PrivatRoute exact path="/expense" redirectTo="/login">
              <ExpenseIncome />
            </PrivatRoute>
            <PrivatRoute exact path="/income" redirectTo="/login">
              <ExpenseIncome />
            </PrivatRoute>
            <Route>
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
