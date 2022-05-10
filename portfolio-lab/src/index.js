import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Nav from './components/Nav';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/logowanie' element={<SignIn/>}/>
        <Route path='rejestracja' element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>

);