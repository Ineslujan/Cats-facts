import { v4 as uuid } from 'uuid';
import React, { useEffect, useState } from 'react';
import getFacts from '../../requests/getFacts';
import Main from '../3-Organisms/Main/Main';

function Facts() {
  const [datasApi, setDatasApi] = useState([]);

  const getFactsDatas = async () => {
    const datas = await getFacts();

    setDatasApi(datas);
  };

  useEffect(() => {
    getFactsDatas();
  }, []);

  return (
    <Main>
      <ul className="facts">
        {datasApi && datasApi.map((d) => (
          <li key={uuid()} className="facts-fact">
            {d.fact}
          </li>
        ))}
      </ul>
    </Main>
  );
}

export default Facts;
