import React from 'react';
import './NewSignin.css';
import { useNavigate } from 'react-router-dom';

const NewSignin = () => {

  const navigate=useNavigate();
  const handleNavigation = (path) => () => {
    navigate(path);
  }

  return (
    <div className="signin-container">
      <div className="signin-left-side">
        <img src="https://img.freepik.com/free-vector/man-taking-break-from-work_23-2148508516.jpg?ga=GA1.1.1089435049.1721976240&semt=ais_user" alt="Illustration" />
      </div>
      <div className="signin-right-side">
        <div className="sign-in-box">
          <h2 className="signinh2">Sign in</h2>
          <div className="email-login">
            <div className="input-group">
              <h3 className="input-label">Enter email</h3>
              <input type="text" placeholder="Email" />
            </div>
            <div className="input-group">
              <h3 className="input-label">Enter password</h3>
              <input type="password" placeholder="Password" />
            </div>
            <button className="sign-in-btn" onClick={handleNavigation('/userdashboard')}>Sign In</button>
          </div>
          <p className="signup-link">Don't have an account? <a href="/NewSignup">Sign up</a></p>
        </div>
      </div>
    </div>
  );
};

export default NewSignin;
