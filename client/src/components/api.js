import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000', // Proxy URL
  timeout: 5000, // Timeout
  // Other configurations if needed
});

const signup = async (userData) => {
  try {
    const response = await axiosInstance.post('/register', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default signup;
