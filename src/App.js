import Balance from './components/Balance/Balance';
import RegistrationForm from '../src/components/RegistrationForm/RegistrationForm';
import Header from './components/Header/Header';
import Container from './components/Container/Container';


function App() {
  return (
      <Container>
        <Header />
        <Balance />
        <RegistrationForm />
      </Container>
  );
}

export default App;
