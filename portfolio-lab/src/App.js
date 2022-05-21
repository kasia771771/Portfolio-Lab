import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home.js'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Nav from './components/Nav';
import LogOut from './components/LogOut';

export default function App() {
    return (
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/logowanie' element={<SignIn/>}/>
                <Route path='rejestracja' element={<SignUp/>}/>
                <Route path='wylogowano' element={<LogOut/>}/>
            </Routes>
        </BrowserRouter>
    )
}
