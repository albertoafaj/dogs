import React from 'react';
import './App.css'
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Login/Login';
import { UserStorage } from './UserContext'

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login/*' element={<Login />}></Route>
          </Routes>
        </UserStorage>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
