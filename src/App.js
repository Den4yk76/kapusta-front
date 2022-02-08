import Balance from './components/Balance/Balance';
import RegistrationForm from '../src/components/RegistrationForm/RegistrationForm';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import Summary from './components/Summary/Summary';
import Hero from './components/Hero/Hero';
import ExpenseIncome from './components/ExpenseIncome/ExpenseIncome/ExpenseIncome'

function App() {
  return (
    <>
      <Header />
      <Container>
        {/*   <Hero /> */}
        <Balance />
        <RegistrationForm />
        <ExpenseIncome />
      </Container>
    </>
  );
}

export default App;
