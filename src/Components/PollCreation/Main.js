import React, { useState } from 'react';
import './Main.css';
import UserDetails from './UserDetails';
import CreatePoll from './CreatePoll';

function Main() {
  const initialPollDetails = {
    pollType: '',
    question: '',
    options: [],
    style: {
      fontFamily: 'Arial',
      fontSize: '16px',
      fontColor: '#000000',
      backgroundColor: '#ffffff',
    },
    yesNoValue: '0',
    rating: 0,
    matrixRows: [],
    matrixColumns: [],
    images: [],
  };

  const [pollDetails, setPollDetails] = useState(initialPollDetails);

  const handlePollDetailsChange = (details) => {
    setPollDetails((prevDetails) => ({
      ...prevDetails,
      ...details,
    }));
  };

  const handleReset = () => {
    setPollDetails(initialPollDetails);
  };

  return (
    <div className="app-container">
      <div className="mainleft-panel">
        <UserDetails pollDetails={pollDetails} onPollDetailsChange={handlePollDetailsChange} />
      </div>
      <div className="mainright-panel">
        <CreatePoll pollDetails={pollDetails} onReset={handleReset} />
      </div>
    </div>
  );
}

export default Main;
