import { v4 as uuid } from 'uuid';
import React, { useEffect, useState } from 'react';
import getBreeds from '../../../requests/getBreeds';

import './breeds.scss';

import Main from '../Main/Main';
import Loader from '../../1-Atoms/Loader/Loader';
import CardBreed from '../../2-Molecules/CardBreed/CardBreed';
import Pagination from '../../2-Molecules/Pagination/Pagination';

function Breeds() {
  const [isLoading, setIsLoading] = useState(true);
  const [datasApi, setDatasApi] = useState([]);
  const [currentPage, setCurrentPage] = useState(null);
  const [lastPage, setLastPage] = useState(null);

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
          <section className="breeds">
            {datasApi && datasApi.map((d) => (
              <CardBreed key={uuid()} breed={d} />
            ))}
          </section>
          <Pagination currentPage={currentPage} lastPage={lastPage} getDatas={getBreedsDatas} />
        </>
      )}
    </Main>
  );
}

export default Breeds;
