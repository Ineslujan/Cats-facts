import axios from 'axios';
import api from './api';

const getRandomFact = async () => {
  try {
    const response = await axios.get(`${api}/fact`);
    return response.data;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default getRandomFact;
