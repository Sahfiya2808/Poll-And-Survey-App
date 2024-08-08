// src/services/userService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/users';
const API_URL2 = 'http://localhost:8080/api/polls';
const API_URL3 = 'http://localhost:8080/api/public-polls';
const API_URL4 = 'http://localhost:8080/api/public';

const getUserName = async (userId) => {
    try {
      const response = await axios.get(`${API_URL}`/`${userId}`);
      return response.data.username; 
    } catch (error) {
      console.error('Error fetching user details:', error);
      throw error;
    }
  };

const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}`/fetch);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

const createUser = async (userData) => {
    try {
      const response = await axios.post(`${API_URL}`/add, userData);
      return response.data;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  };

const fetchPollsByUser = async (userId) => {
  try {
    const response = await axios.get(`${API_URL2}`/user/`${userId}`);
    return response.data;
  } catch (error) {
    console.error('There was an error fetching the polls!', error);
    throw error;
  }
};

const fetchPollById = async (pollId) => {
    const response = await fetch(`${API_URL2}`/`${pollId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch poll data');
    }
    return response.json();
  };

const createPoll = async (pollData) => {
    try {
      const response = await axios.post(API_URL2, pollData);
      return response.data;
    } catch (error) {
      console.error('Error creating poll:', error);
      if (error.response) {
        console.error('Error details:', error.response.data);
      }
      throw error; // Rethrow the error to handle it in the component
    }
  };


const fetchPollsByCategory = async (category) => {
    try {
      const response = await axios.get(`${API_URL2}`/category/`${category}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching polls:', error);
      throw error;
    }
  };
  

  const submitPollResponse = async (data) => {
    try {
      const response = await axios.post(`${API_URL3}`, data);
      return response.data;
    } catch (error) {
      console.error('Error submitting poll response:', error);
      throw error;
    }
  };

  const fetchPublicPollById = async (pollId) => {
    const response = await fetch(`${API_URL3}`/polls/`${pollId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch public poll data');
    }
    return response.json();
  };

const fetchPublicUsers = async () => {
  try {
    const response = await axios.get(API_URL4);
    return response.data;
  } catch (error) {
    console.error('Error fetching public users:', error);
    throw error;
  }
};

const addUser = async (nickname, age) => {
    try {
      const response = await axios.post(API_URL4, {
        nickname,
        age: parseInt(age, 10),
      });
      return response.data;
    } catch (error) {
      console.error('Error adding user:', error);
      throw error;
    }
  };
  

export default {
    getUserName,
    fetchPublicUsers,
    fetchPollById,
    addUser,
  fetchUsers,
  createUser,
  fetchPollsByUser,
  submitPollResponse,
  fetchPollsByCategory ,
  createPoll,
  fetchPublicPollById
};