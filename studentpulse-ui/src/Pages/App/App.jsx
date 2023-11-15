// IMPORTS ---------------------------------------------------------------------------------------------------------------
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState} from 'react';
import LandingPage from '../Landing Page/LandingPage';
import RegisterPage from '../Registration Page/RegistrationPage';
import DefaultNavBar from '../../Components/DefaultNavBar/DefaultNavBar';
import LoginPage from '../Login Page/LoginPage';
import CourseSearchPage from '../Course Search Page/CourseSearchPage';
import IndividualCoursePage from '../IndividualCoursePage/IndividualCoursePage';
import './App.css';


// MAIN APP FUNCTION ----------------------------------------------------------------------------------------------------- 
export default function App() {
  const [user, setUser] = useState({});

  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <DefaultNavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path='/' element={<LandingPage />}></Route>
            <Route path='/register' element={<RegisterPage user={user} setUser={setUser}/>}></Route>
            <Route path='/login' element={<LoginPage/>}></Route>
            <Route path='/search-courses' element={<CourseSearchPage />}></Route>
            <Route path='/search-courses/:courseId' element={<IndividualCoursePage />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

