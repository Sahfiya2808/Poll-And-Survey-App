import React from 'react';
import './Category.css';
import { useNavigate } from 'react-router-dom';

const SocialMedia = () => {
    const handleClick = () => {
        alert('Thank you for participating in the education poll!');
    };
    const navigate= useNavigate();

    return (
        <div className="education-poll-container">
            <h1>SocialMedia Poll</h1>
            <p>We value your opinion on various educational topics. Please take a moment to participate in our poll and share your thoughts.</p>
            <button onClick={handleClick} className="allpoll-button">Submit Your Vote</button>
            <button className="allback-button" onClick={() => navigate('/publicdashboard')}></button>
        </div>
    );
};

export default SocialMedia;
