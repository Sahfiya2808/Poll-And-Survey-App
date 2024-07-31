import React from 'react';
import './MainSection.css';
import { useNavigate } from 'react-router-dom';

const MainSection = () => {
  const navigate=useNavigate();
  const handleClick=(path)=>()=>{
    navigate(path);
  }
  return (
    <section className="main-section">
      <div className="intro-text">
        <h1>Start A Poll, Spark a Conversation</h1>
        <p>Poll your audience and spark a conversation that leads to innovative solutions, as people come together to discuss and brainstorm new ideas.</p>
        <button className="sign-up-free" onClick={handleClick('/main')}>+ Create </button>
      </div>
      <div className="intro-image">
        <img src="https://img.freepik.com/free-vector/posts-concept-illustration_114360-112.jpg?ga=GA1.1.459237625.1721796584&semt=ais_user" alt="Financial Overview" />
      </div>
    </section>
  );
};

export default MainSection;
