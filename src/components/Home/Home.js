import React, { useEffect, useState } from 'react';

import getRandomFact from '../../requests/getRandomFact';

import Footer from '../3-Organisms/Footer/Footer';
import Header from '../3-Organisms/Header/Header';

import Main from '../3-Organisms/Main/Main';

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
    <>
      <Header />
      <Main
        isLoading={isLoading}
        dataFactApi={dataFactApi}
        getRandomFactDatas={getRandomFactDatas}
      />
      <Footer />
    </>
  );
}

export default Home;
