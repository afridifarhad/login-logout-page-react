import React from 'react';

function LoggedOut({ onLogin }) {
  return (
    <div className="logged-out">
      <h1>Please log in.</h1>
      <button className="btn" onClick={onLogin}>Login</button>
    </div>
  );
}

export default LoggedOut;
