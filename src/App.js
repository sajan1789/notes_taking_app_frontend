import logo from './logo.svg';
import './App.css';
import MainRoutes from './Pages/MainRoutes';
import Login from './Pages/Login';
import Signup from './Pages/SignUp';
import AddNotes from './Pages/AddNotes';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainRoutes/>
    </div>
  );
}

export default App;
