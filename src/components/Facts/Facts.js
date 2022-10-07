import { v4 as uuid } from 'uuid';
import React, { useEffect, useState } from 'react';
import getBreeds from '../../requests/getBreeds';

function Facts() {
  const [datasApi, setDatasApi] = useState([]);
  const [linksApi, setLinksApi] = useState([]);

  useEffect(() => {
    const getBreedsDatas = async () => {
      const datas = await getBreeds();

      console.log('================>', datas);

      setDatasApi(datas.breedsDatas);
      setLinksApi(datas.breedsLinks);
    };

    getBreedsDatas();
  }, []);

  console.log('ddddddddddd', datasApi, linksApi);

  return (
    <div>
      <ul>
        {datasApi && datasApi.map((d) => (
          <li key={uuid()}>
            <p>{d.breed}</p>
            <p>{d.country}</p>
            <p>{d.origin}</p>
            <p>{d.coat}</p>
            <p>{d.pattern}</p>
          </li>
        ))}
      </ul>
      <p>
        {/* {datasApi?.breed && datasApi.breed}
        {datasApi?.country && datasApi.country}
        {datasApi?.origin && datasApi.origin}
        {datasApi?.coat && datasApi.coat}
        {datasApi?.pattern && datasApi.pattern} */}
      </p>
    </div>
  );
}

export default Facts;
