import React from 'react';
import './styles/App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import {Navbar} from './components/UI/navbar/Navbar';
import { AppRouter } from './components/AppRouter';
import { AuthContext } from './components/context';

function App() {
  return (
    <AuthContext.Provider>
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
    </BrowserRouter>
    </AuthContext.Provider>
    
  )
}

export default App;
