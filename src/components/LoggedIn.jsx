import React from 'react';

function LoggedIn({ onLogout }) {
  return (
    <div className="logged-in">
      <h1>Welcome, User!</h1>
      <button className="btn" onClick={onLogout}>Logout</button>
    </div>
  );
}

export default LoggedIn;
