import { v4 as uuid } from 'uuid';
import React, { useEffect, useState } from 'react';
import getBreeds from '../../../requests/getBreeds';

import './breeds.scss';

import Main from '../Main/Main';
import Loader from '../../1-Atoms/Loader/Loader';
import CardBreed from '../../2-Molecules/CardBreed/CardBreed';
import Pagination from '../../2-Molecules/Pagination/Pagination';
import SearchForm from '../../2-Molecules/SearchForm/SearchForm';

function Breeds() {
  const [isLoading, setIsLoading] = useState(true);
  const [datasApi, setDatasApi] = useState([]);
  const [currentPage, setCurrentPage] = useState(null);
  const [lastPage, setLastPage] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  const getBreedsDatas = async (newPage) => {
    setIsLoading(true);

    const datas = await getBreeds(newPage);

    setDatasApi(datas.breedsDatas);
    setCurrentPage(datas.breedsCurrentPage);
    setLastPage(datas.breedsLastpage);
    setIsLoading(false);
  };

  useEffect(() => {
    getBreedsDatas(1);
  }, []);

  return (
    <Main>
      {isLoading ? <Loader /> : (
        <>
          <SearchForm searchValue={searchValue} setSearchValue={setSearchValue} />
          <section className="breeds">
            {datasApi && datasApi.filter((data) => (
              data.breed.toLowerCase().includes(searchValue.toLowerCase())
              || data.country.toLowerCase().includes(searchValue.toLowerCase())
              || data.origin.toLowerCase().includes(searchValue.toLowerCase())
              || data.coat.toLowerCase().includes(searchValue.toLowerCase())
              || data.pattern.toLowerCase().includes(searchValue.toLowerCase())
            )).map((d) => (
              <CardBreed key={uuid()} breed={d} />
            ))}
          </section>
          <Pagination
            currentPage={currentPage}
            lastPage={lastPage}
            getDatas={getBreedsDatas}
            setSearchValue={setSearchValue}
          />
        </>
      )}
    </Main>
  );
}

export default Breeds;
