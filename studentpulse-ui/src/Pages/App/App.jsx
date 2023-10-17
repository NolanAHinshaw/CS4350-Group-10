import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from '../Landing Page/LandingPage';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

