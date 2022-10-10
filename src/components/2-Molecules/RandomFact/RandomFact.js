import React from 'react';
import PropTypes from 'prop-types';

import Loader from '../../1-Atoms/Loader/Loader';
import RefreshFactButton from '../../1-Atoms/RefreshFactButton/RefreshFactButton';
import RandomFactApi from '../../1-Atoms/RandomFactApi/RandomFactApi';

function RandomFact({ isLoading, dataFactApi, getRandomFactDatas }) {
  return (
    <section>
      {!isLoading ? <RandomFactApi dataFactApi={dataFactApi} /> : <Loader />}
      {!isLoading && <RefreshFactButton getRandomFactDatas={getRandomFactDatas} />}
    </section>
  );
}

RandomFact.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  dataFactApi: PropTypes.string.isRequired,
  getRandomFactDatas: PropTypes.func.isRequired,
};

export default RandomFact;
