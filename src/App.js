import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainRoute from './RoutingModule/MainRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';

function App() {
  return (
    <>
      <div className="App">
        <MainRoute />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
