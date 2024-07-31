import React, { useState } from 'react';
import './Category.css';
import { useNavigate } from 'react-router-dom';

const Entertainment = () => {
    const navigate = useNavigate();
    const [polls, setPolls] = useState([
        {
            id: 1,
            type: 'multiple',
            question: 'Who is your favorite actor?',
            options: ['Actor A', 'Actor B', 'Actor C'],
            votes: [0, 0, 0],
            selected: []
        },
        {
            id: 2,
            type: 'yesno',
            question: 'Do you like action movies?',
            options: ['Yes', 'No'],
            votes: [0, 0],
            selected: null
        },
        {
            id: 3,
            type: 'single',
            question: 'Which is your favorite movie of 2023?',
            options: ['Movie A', 'Movie B', 'Movie C'],
            votes: [0, 0, 0],
            selected: null
        },
        {
            id: 4,
            type: 'multiple',
            question: 'Which genre do you prefer?',
            options: ['Action', 'Comedy', 'Drama', 'Horror'],
            votes: [0, 0, 0, 0],
            selected: []
        },
        {
            id: 5,
            type: 'yesno',
            question: 'Do you enjoy watching TV series?',
            options: ['Yes', 'No'],
            votes: [0, 0],
            selected: null
        },
        {
            id: 6,
            type: 'single',
            question: 'Which streaming service do you use the most?',
            options: ['Netflix', 'Amazon Prime', 'Disney+', 'Hulu'],
            votes: [0, 0, 0, 0],
            selected: null
        }
    ]);

    const handleVote = (pollId, optionIndex) => {
        setPolls(polls.map(poll =>
            poll.id === pollId
                ? { ...poll, votes: poll.votes.map((vote, index) => index === optionIndex ? vote + 1 : vote) }
                : poll
        ));
    };

    const handleOptionChange = (pollId, optionIndex) => {
        setPolls(polls.map(poll => {
            if (poll.id === pollId) {
                if (poll.type === 'multiple') {
                    const selected = poll.selected.includes(optionIndex)
                        ? poll.selected.filter(index => index !== optionIndex)
                        : [...poll.selected, optionIndex];
                    return { ...poll, selected };
                } else {
                    return { ...poll, selected: optionIndex };
                }
            }
            return poll;
        }));
    };

    const handleSubmit = (poll) => {
        if (poll.type === 'multiple') {
            poll.selected.forEach(index => handleVote(poll.id, index));
        } else {
            handleVote(poll.id, poll.selected);
        }
        alert(`Thank you for voting on: ${poll.question}`);
    };

    return (
        <div className="entertainment-poll-container">
            <h1>Entertainment Poll</h1>
            <p>We value your opinion on various entertainment topics. Please take a moment to participate in our poll and share your thoughts.</p>
            <div className="polls-list">
                {polls.map(poll => (
                    <div key={poll.id} className="poll-item">
                        <p>{poll.question}</p>
                        <div className="options">
                            {poll.options.map((option, index) => (
                                <label key={index} className="option-label">
                                    {poll.type === 'multiple' ? (
                                        <input
                                            type="checkbox"
                                            checked={poll.selected.includes(index)}
                                            onChange={() => handleOptionChange(poll.id, index)}
                                        />
                                    ) : (
                                        <input
                                            type="radio"
                                            name={`poll-${poll.id}`}
                                            checked={poll.selected === index}
                                            onChange={() => handleOptionChange(poll.id, index)}
                                        />
                                    )}
                                    {option} ({poll.votes[index]} votes)
                                </label>
                            ))}
                        </div>
                        <button onClick={() => handleSubmit(poll)} className="submit-button">Submit</button>
                    </div>
                ))}
            </div>
            <button className="allback-button" onClick={() => navigate('/publicdashboard')}>Back to Dashboard</button>
        </div>
    );
};

export default Entertainment;
