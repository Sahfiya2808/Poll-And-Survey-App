// LandingPage.jsx
import React from 'react';
import './Newlandingpage.css';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => () => {
    navigate(path);
  };

  return (
    <div className="landcontainer">
      <div className="landgrid">
        <div className="landbox landleft-side">
          <h1 className="landh1">Make Your Opinion Matter</h1>
          <input type="text" className="landnickname-input" placeholder="Enter your nickname" />
          <input type="text" className="landnickname-input" placeholder="Enter your age" />
          <div className="button-container">
            <button className="get-landbutton" onClick={handleNavigation('/publicdashboard')} style={{marginTop:"43px"}}>Get Started</button>
          </div>
        </div>
        <div className="landbox landright-side">
          <h1 className="landh1">Create Your Own <br />Poll</h1>
          <div className="button-container">
            <button className="sign-landbutton" onClick={handleNavigation('/NewSignin')} style={{marginTop:"150px"}}>Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
