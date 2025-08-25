import { useState } from 'react'
import './App.css'
import { SignupForm } from './pages/SignupPage';
import { Routes, Route, Navigate } from 'react-router-dom';
function App() {

  return (
    
    <Routes>
      <Route path="/" element={<Navigate to="/signup" replace />} />
      <Route path='/signup' element={<SignupForm />} />
    </Routes>

  )
}

export default App
