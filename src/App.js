import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import './styles.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false); // Simulate logout
  };

  const handleLogin = () => {
    setIsAuthenticated(true); // Simulate login
  };

  const handleSignup = () => {
    setIsAuthenticated(true); // Simulate signup and authentication
  };

  return (
    <Router>
      {isAuthenticated ? (
        <>
          <Header onLogout={handleLogout} />
          <div className="container">
            <Sidebar />
            <div className="main">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </div>
          </div>
        </>
      ) : (
        <Routes>
          <Route 
            path="/login" 
            element={<Login onLogin={handleLogin} />} 
          />
          <Route 
            path="/signup" 
            element={<Signup onSignup={handleSignup} />} 
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
