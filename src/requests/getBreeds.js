import axios from 'axios';
import api from './api';

const getBreeds = async (newPage) => {
  try {
    const response = await axios.get(`${api}/breeds?page=${newPage}`);

    const breedsDatas = response.data.data;
    const breedsCurrentPage = response.data.current_page;
    const breedsLastpage = response.data.last_page;

    return {
      breedsDatas,
      breedsCurrentPage,
      breedsLastpage,
    };
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default getBreeds;
