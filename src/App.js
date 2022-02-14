import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Balance from './components/Balance/Balance';
import RegistrationForm from '../src/components/RegistrationForm/RegistrationForm';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import Summary from './components/Summary/Summary';
import Hero from './components/Hero/Hero';
import ExpenseIncome from './components/ExpenseIncome/ExpenseIncome/ExpenseIncome';
import Reports from './components/Reports/Reports';

function App() {
  return (
    <>
      <Header />
      <Container>
        {/* <Hero /> */}
        <Balance />
        {/* <PrivateRoute
              path={routes.reports}
              component={Reports}
              redirectTo={routes.home}
            /> */}
        <RegistrationForm />
        <ExpenseIncome />
      </Container>
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
