import React from 'react';
import PropTypes from 'prop-types';

import RandomFact from '../../2-Molecules/RandomFact/RandomFact';
import Sections from '../../2-Molecules/Sections/Sections';

function Main({ isLoading, dataFactApi, getRandomFactDatas }) {
  return (
    <main>
      <RandomFact
        isLoading={isLoading}
        dataFactApi={dataFactApi}
        getRandomFactDatas={getRandomFactDatas}
      />
      <Sections />
    </main>
  );
}

Main.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  dataFactApi: PropTypes.string.isRequired,
  getRandomFactDatas: PropTypes.func.isRequired,
};

export default Main;
