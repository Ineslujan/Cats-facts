import React from 'react';
import PropTypes from 'prop-types';

import RandomFact from '../../2-Molecules/RandomFact/RandomFact';
import Sections from '../../2-Molecules/Sections/Sections';

function MainContent({ isLoading, dataFactApi, getRandomFactDatas }) {
  return (
    <>
      <RandomFact
        isLoading={isLoading}
        dataFactApi={dataFactApi}
        getRandomFactDatas={getRandomFactDatas}
      />
      <Sections />
    </>
  );
}

MainContent.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  dataFactApi: PropTypes.string.isRequired,
  getRandomFactDatas: PropTypes.func.isRequired,
};

export default MainContent;
