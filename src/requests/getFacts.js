import axios from 'axios';
import api from './api';

const getFacts = async () => {
  try {
    const response = await axios.get(`${api}/facts?page=1`);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default getFacts;
