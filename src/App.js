import Balance from './components/Balance/Balance';
import RegistrationForm from '../src/components/RegistrationForm/RegistrationForm';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import Summary from './components/Summary/Summary';
import BalanceForm from './components/BalanceForm/BalanceForm';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Balance />
        <BalanceForm/>
        <RegistrationForm />
        <Summary />
      </Container>
    </>
  );
}

export default App;
