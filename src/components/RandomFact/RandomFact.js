import React, { useEffect, useState } from 'react';
import getRandomFact from '../../requests/getRandomFact';

function RandomFact() {
  const [datasApi, setDatasApi] = useState([]);

  const getRandomFactDatas = async () => {
    const datas = await getRandomFact();

    console.log('================>', datas);

    setDatasApi(datas.fact);
  };

  useEffect(() => {
    getRandomFactDatas();
  }, []);

  console.log('ddddddddddd', datasApi);

  return (
    <q>
      {datasApi && datasApi}
    </q>
  );
}

export default RandomFact;
