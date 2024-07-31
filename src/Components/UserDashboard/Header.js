import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate('/');
  }
  return (
    <header className="header">
      <div className="logo">SurveySphere</div>
      <nav className="nav">
        <a href="#">How it works</a>
        <a href="#">Explore</a>
        <a href="#">List</a>
        <a href="#" style={{color:"orange"}}>Premium</a>
        

      </nav>
      <div className="auth-buttons">
        <button className="sign-up" onClick={handleClick}>Log out</button>
      </div>
    </header>
  );
};

export default Header;
