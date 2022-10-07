import axios from 'axios';
import api from './api';

const getBreeds = async () => {
  try {
    const response = await axios.get(`${api}/breeds?page=1`);

    const breedsDatas = response.data.data;
    const breedsLinks = response.data.links;

    return {
      breedsDatas,
      breedsLinks,
    };
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default getBreeds;
