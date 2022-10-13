import React, { useEffect, useState } from 'react';

import getRandomFact from '../../../requests/getRandomFact';

import Loader from '../../1-Atoms/Loader/Loader';
import RefreshFactButton from '../../1-Atoms/RefreshFactButton/RefreshFactButton';
import RandomFactApi from '../../1-Atoms/RandomFactApi/RandomFactApi';

import './randomFact.scss';

function RandomFact() {
  const [isLoading, setIsLoading] = useState(true);
  const [dataFactApi, setDataFactApi] = useState('');

  const getRandomFactDatas = async () => {
    setIsLoading(true);

    const datas = await getRandomFact();

    setDataFactApi(datas.fact);
    setIsLoading(false);
  };

  useEffect(() => {
    getRandomFactDatas();
  }, []);

  return (
    <section className="randomFact">
      {!isLoading ? <RandomFactApi dataFactApi={dataFactApi} /> : <Loader />}
      {!isLoading && <RefreshFactButton getRandomFactDatas={getRandomFactDatas} />}
    </section>
  );
}

export default RandomFact;
