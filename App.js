import React, { useState } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import Balance from './components/Balance';
import Profile from './components/Profile';
import Transfers from './components/Transfers';
import About from './components/About';

function App() {
  const [user, setUser] = useState(null);
  const [balance, setBalance] = useState(1000); // initial balance for demo

  const handleLogin = (username) => {
    setUser({ username });
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return (
      <div>
        <h1>Banking App</h1>
        <nav>
          <Link to="/login">Login</Link> |{' '}
          <Link to="/register">Register</Link> |{' '}
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    );
  }

  return (
    <div>
      <h1>Banking App</h1>
      <nav>
        <Link to="/balance">Balance</Link> |{' '}
        <Link to="/profile">Profile</Link> |{' '}
        <Link to="/transfers">Transfers</Link> |{' '}
        <Link to="/about">About</Link> |{' '}
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <Routes>
        <Route path="/balance" element={<Balance balance={balance} />} />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="/transfers" element={<Transfers balance={balance} setBalance={setBalance} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/balance" replace />} />
      </Routes>
    </div>
  );
}

export default App;
