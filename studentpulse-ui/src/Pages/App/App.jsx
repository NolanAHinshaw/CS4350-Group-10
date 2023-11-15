// IMPORTS ---------------------------------------------------------------------------------------------------------------
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from '../Landing Page/LandingPage';
import RegisterPage from '../Registration Page/RegistrationPage';
import DefaultNavBar from '../../Components/DefaultNavBar/DefaultNavBar';
import LoginPage from '../Login Page/LoginPage';
import CourseSearchPage from '../Course Search Page/CourseSearchPage';
import IndividualCoursePage from '../IndividualCoursePage/IndividualCoursePage';
import './App.css';
import UserProfile from '../User Profile Page/UserProfile';


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
            <Route path='/userprofile' element={<UserProfile/>}></Route>
            <Route path='/search-courses' element={<CourseSearchPage />}></Route>
            <Route path='/search-courses/:courseId' element={<IndividualCoursePage />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

