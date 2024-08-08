import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Category.css';
import { useNavigate } from 'react-router-dom';
import PollOptions from '../PollOptions';

const Sports= () => {
  const [polls, setPolls] = useState([]);
  const [responses, setResponses] = useState({});
  const [currentPage, setCurrentPage] = useState(0); // To track the current page of polls
  const pollsPerPage = 2; // Number of polls to display per page
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPolls = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/polls/category/Sports');
        setPolls(response.data);
      } catch (error) {
        console.error('Error fetching polls:', error);
      }
    };

    fetchPolls();
  }, []);

  const handleResponseChange = (pollId, responseType, response) => {
    setResponses(prevResponses => ({
      ...prevResponses,
      [pollId]: { responseType, response }
    }));
  };

  const handleSubmit = async (pollId) => {
    const publicId = localStorage.getItem('publicId');
    const category = 'Education';
    const currentDate = new Date().toISOString();

    const { responseType, response } = responses[pollId] || {};

    if (!responseType || !response) {
      alert('Please select an option before submitting.');
      return;
    }

    const data = {
      pollId,
      publicId,
      category,
      date: currentDate,
      responseType,
      response
    };

    try {
      await axios.post('http://localhost:8080/api/public-polls', data);
      alert('Your response has been submitted!');
    } catch (error) {
      console.error('Error submitting poll response:', error);
      alert('There was an error submitting your response. Please try again.');
    }
  };

  const handleNextPage = () => {
    if ((currentPage + 1) * pollsPerPage < polls.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const displayedPolls = polls.slice(currentPage * pollsPerPage, (currentPage + 1) * pollsPerPage);

  return (
    <div className="polls-wrapper">
      <div className="education-poll-container">
        <center>
          <h1>Sports Polls</h1>
          <p>We value your opinion on various sports topics. Please take a moment to participate in our poll and share your thoughts.</p>
        </center>
        <button style={{color:"white"}}className="back-buttons" onClick={() => navigate('/publicdashboard')}>Home</button>
      </div>
      {polls.length === 0 ? (
        <>
          <div className="no-polls-message">Currently, no polls are available.</div>
          <center>
            <img src="https://img.freepik.com/free-vector/hand-drawn-no-data-concept_52683-127829.jpg?ga=GA1.1.459237625.1721796584&semt=ais_hybrid" alt="Avatar" className="avatar" />
          </center>
        </>
      ) : (
        <>
          <div className="polls-container">
            {displayedPolls.map((pollDetails) => {
              const style = {
                fontFamily: pollDetails.fontFamily || 'Arial',
                fontSize: `${pollDetails.fontSize}px` || '16px',
                color: pollDetails.fontColor || '#000',
                backgroundColor: pollDetails.backgroundColor || '#fff',
              };
              return (
                <div key={pollDetails.pollId} className="poll-card" style={style}>
                  <div className="poll-title" style={{ fontSize: `${pollDetails.fontSize}px` }}>
                    <strong>{pollDetails.question}</strong>
                  </div>
                  <PollOptions pollDetails={pollDetails} onResponseChange={handleResponseChange} />
                  <button className="submit" style={{ width: "100px",marginTop:"10px",backgroundColor:"rgb(12, 57, 82)"}} onClick={() => handleSubmit(pollDetails.pollId)}>Submit</button>
                </div>
              );
            })}
          </div>
          <div className="navigation-arrows">
            <button className="arrow left-arrow" onClick={handlePreviousPage} disabled={currentPage === 0}>&#8249;</button>
            <button className="arrow right-arrow" onClick={handleNextPage} disabled={(currentPage + 1) * pollsPerPage >= polls.length}>&#8250;</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Sports;
