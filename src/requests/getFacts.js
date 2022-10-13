import axios from 'axios';
import api from './api';

const getFacts = async (newPage) => {
  try {
    const response = await axios.get(`${api}/facts?page=${newPage}`);

    const factsDatas = response.data.data;
    const factsCurrentPage = response.data.current_page;
    const factsLastpage = response.data.last_page;

    return {
      factsDatas,
      factsCurrentPage,
      factsLastpage,
    };
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default getFacts;
