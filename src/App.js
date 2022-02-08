import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Balance from './components/Balance/Balance';
import RegistrationForm from '../src/components/RegistrationForm/RegistrationForm';

function App() {
  
  return (
    <>
      
      <Balance />
        <RegistrationForm />
        <ToastContainer autoClose={3000} />
     </>
    )
}

export default App;