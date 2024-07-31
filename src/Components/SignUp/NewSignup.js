import React, { useState } from 'react';
import './NewSignup.css';
import { useNavigate } from 'react-router-dom';

const NewSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [ageGroup, setAgeGroup] = useState('');

  const navigate=useNavigate();
  const handleNavigation = (path) => () => {
    navigate(path);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log({
      email,
      password,
      confirmPassword,
      businessType,
      ageGroup,
    });
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2 className="signup-heading">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <h3 className="input-label">Enter business email</h3>
            <input 
              type="email" 
              placeholder="Business email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className="input-group">
            <h3 className="input-label">Enter password</h3>
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <div className="input-group">
            <h3 className="input-label">Confirm password</h3>
            <input 
              type="password" 
              placeholder="Confirm password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required 
            />
          </div>
          <div className="input-group">
            <h3 className="input-label">Enter business type</h3>
            <input 
              type="text" 
              placeholder="Business type" 
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              required 
            />
          </div>
          <div className="input-group">
            <h3 className="input-label">Enter age group</h3>
            <select 
              value={ageGroup}
              onChange={(e) => setAgeGroup(e.target.value)}
              required
            >
              <option value="">Select age group</option>
              <option value="18-24">18-24</option>
              <option value="25-34">25-34</option>
              <option value="35-44">35-44</option>
              <option value="45-54">45-54</option>
              <option value="55+">55+</option>
            </select>
          </div>
          <button type="submit" className="signup-btn" onClick={handleNavigation('/NewSignin')}>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default NewSignup;
