import React, { useState } from 'react';
import LoggedIn from './components/LoggedIn';
import LoggedOut from './components/LoggedOut';
import './index.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="app-container">
      {isLoggedIn ? <LoggedIn onLogout={handleLogout} /> : <LoggedOut onLogin={handleLogin} />}
    </div>
  );
}

export default App;
