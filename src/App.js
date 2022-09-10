import React, {useState} from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './styles/_styles.scss'
import 'normalize.css/normalize.css';
import { AuthContextProvider } from './context/AuthContext';

import Dashboard from './components/Dashboard/Dashboard';
import Holidays from './components/Holidays/Holidays';
import ProtectedRoute from './components/ProtectedRoute';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import Flexi from './components/Flexi/Flexi';


function App() {

  return (
    <div className="App">
    <AuthContextProvider>
      <Routes>

        <Route path="/signup" element={<SignUp />} />
        <Route 
          path="/dashboard" 
          element={<ProtectedRoute><Dashboard /></ProtectedRoute>} 
        />
        <Route 
          path="/holidays" 
          element={<ProtectedRoute><Holidays /></ProtectedRoute>} 
        />
        <Route 
          path="/flexi" 
          element={<ProtectedRoute><Flexi /></ProtectedRoute>} 
        />
        <Route path="/" element={<SignIn />} />
      </Routes>    
    </AuthContextProvider>

    </div>

  );
}

export default App;
