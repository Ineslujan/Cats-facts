import React, { useEffect, useState } from 'react';

import getRandomFact from '../../requests/getRandomFact';
import Main from '../3-Organisms/Main/Main';
import MainContent from '../3-Organisms/MainContent/MainContent';

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [dataFactApi, setDataFactApi] = useState('');
  // const [isHome, setIsHome] = useState(true);

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
    <Main>
      <MainContent
        isLoading={isLoading}
        dataFactApi={dataFactApi}
        getRandomFactDatas={getRandomFactDatas}
      />
    </Main>

  );
}

export default Home;
