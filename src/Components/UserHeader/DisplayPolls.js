import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DisplayPolls.css';

import PollOptions from '../PollOptions';
import { useNavigate } from 'react-router-dom';

const DisplayPolls = () => {
  const [pollsByCategory, setPollsByCategory] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUserId = localStorage.getItem('loggedInUserId');
    axios.get(`http://localhost:8080/api/polls/user/${loggedInUserId}`)
      .then(response => {
        const polls = response.data;

        // Group polls by category
        const groupedPolls = polls.reduce((acc, poll) => {
          const category = poll.pollCategory || 'Uncategorized';
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push(poll);
          return acc;
        }, {});

        setPollsByCategory(groupedPolls);
      })
      .catch(error => {
        console.error('There was an error fetching the polls!', error);
      });
  }, []);

  return (
    <div className="dp-display-polls">
      <button className="dp-home-button" onClick={() => navigate('/user-dashboard')}>Home</button>
      {Object.keys(pollsByCategory).map(category => (
        <div key={category} className="dp-poll-category">
          <h2>{category}</h2>
          <div className="dp-polls-list">
            {pollsByCategory[category].map(poll => (
              <div key={poll.pollId} className="dp-polling-card" style={{ fontFamily: poll.fontFamily, fontSize: `${poll.fontSize}px`, color: poll.fontColor, backgroundColor: poll.backgroundColor }}>
                <div className="dp-poll-title" style={{ fontSize: `${poll.fontSize}px` }}>
                  <strong>{poll.question}</strong>
                </div>
                <PollOptions pollDetails={poll} />
                <div className="dp-card-buttons">
                  <button className="dp-change-button">Change</button>
                  <button className="dp-delete-button">Delete</button>
                </div>
              </div>
            ))}
            <button className="dp-show-more" onClick={() => navigate('/main')}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayPolls;
