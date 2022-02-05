import Balance from './components/Balance/Balance';
import RegistrationForm from '../src/components/RegistrationForm/RegistrationForm';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import Summary from './components/Summary/Summary';

function App() {
  return (
    <Container>
      <Header />
      <Balance />
      <RegistrationForm />
      <Summary />
    </Container>
  );
}

export default App;
