// IMPORTS ---------------------------------------------------------------------------------------------------------------
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from '../Landing Page/LandingPage';
import RegisterPage from '../Registration Page/RegistrationPage';
import DefaultNavBar from '../../Components/DefaultNavBar/DefaultNavBar';
import LoginPage from '../Login Page/LoginPage';
import './App.css';


// MAIN APP FUNCTION ----------------------------------------------------------------------------------------------------- 
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <DefaultNavBar />
          <Routes>
            <Route path='/' element={<LandingPage />}></Route>
            <Route path='/register' element={<RegisterPage/>}></Route>
            <Route path='/login' element={<LoginPage/>}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

