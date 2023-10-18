// IMPORTS ---------------------------------------------------------------------------------------------------------------
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from '../Landing Page/LandingPage';
import DefaultNavBar from '../../Components/DefaultNavBar/DefaultNavBar';
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
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

