import { v4 as uuid } from 'uuid';
import React, { useEffect, useState } from 'react';
import getBreeds from '../../requests/getBreeds';
import Main from '../3-Organisms/Main/Main';

function Breeds() {
  const [datasApi, setDatasApi] = useState([]);

  useEffect(() => {
    const getBreedsDatas = async () => {
      const datas = await getBreeds();

      setDatasApi(datas.breedsDatas);
    };

    getBreedsDatas();
  }, []);

  return (
    <Main>
      {datasApi && datasApi.map((d) => (
        <article key={uuid()}>
          <h2>{d.breed}</h2>
          <h3><span>from : </span>{d.country}</h3>
          <p>Origin : {d.origin}</p>
          <p>Coat : {d.coat}</p>
          <p>Pattern : {d.pattern}</p>
        </article>
      ))}
    </Main>

  );
}

export default Breeds;
