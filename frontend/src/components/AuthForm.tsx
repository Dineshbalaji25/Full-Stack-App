import React from 'react';
import './AuthForm.css';

const AuthForm = () => {
  return (
    <div className="auth-container">
      <div className="login-container">
        <h1>Welcome back!</h1>
        <form>
          <input type="text" placeholder="UID" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
