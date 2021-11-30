import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Profile from "./pages/Profile/Profile";
import Registration from "./pages/Registration/Registration";
import TestPage from "./pages/TestPage/TestPage";
import NewPassword from "./pages/NewPassword/NewPassword";
import Login from "./pages/Login/Login";
import ForgotYourPassword from "./pages/ForgotYourPassword/ForgotYourPassword";
import NotFound from "./pages/404/404";

export const PATH = {
    PROFILE: '/profile',
    REGISTRATION: '/registration',
    TEST: '/test',
    NEW_PASSWORD: '/new-password',
    LOGIN: '/login',
    FORGOT_MY_PASSWORD: '/forgot-my-password',
    NOT_FOUND: '/404'
}



function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={'/'} element={<Profile/>}/>
            <Route path={PATH.PROFILE} element={<Profile/>}/>
            <Route path={PATH.REGISTRATION} element={<Registration/>}/>
            <Route path={PATH.TEST} element={<TestPage/>}/>
            <Route path={PATH.NEW_PASSWORD} element={<NewPassword/>}/>
            <Route path={PATH.LOGIN} element={<Login/>}/>
            <Route path={PATH.FORGOT_MY_PASSWORD} element={<ForgotYourPassword/>}/>
            <Route path='*' element={<NotFound/>} />
        </Routes>
    </div>
  );
}

export default App;
