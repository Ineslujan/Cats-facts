import { v4 as uuid } from 'uuid';
import React, { useEffect, useState } from 'react';
import getFacts from '../../../requests/getFacts';

import Main from '../Main/Main';
import Loader from '../../1-Atoms/Loader/Loader';
import CardFact from '../../2-Molecules/CardFact/CardFact';
import Pagination from '../../2-Molecules/Pagination/Pagination';

function Facts() {
  const [isLoading, setIsLoading] = useState(true);
  const [datasApi, setDatasApi] = useState([]);
  const [currentPage, setCurrentPage] = useState(null);
  const [lastPage, setLastPage] = useState(null);

  const getFactsDatas = async (newPage) => {
    setIsLoading(true);

    const datas = await getFacts(newPage);

    setDatasApi(datas.factsDatas);
    setCurrentPage(datas.factsCurrentPage);
    setLastPage(datas.factsLastpage);
    setIsLoading(false);
  };

  useEffect(() => {
    getFactsDatas(1);
  }, []);

  return (
    <Main>
      {isLoading ? <Loader /> : (
        <>
          <ul className="facts">
            {datasApi && datasApi.map((d) => (
              <CardFact key={uuid()} fact={d.fact} />
            ))}
          </ul>
          <Pagination currentPage={currentPage} lastPage={lastPage} getDatas={getFactsDatas} />
        </>
      )}
    </Main>
  );
}

export default Facts;
