import React from 'react';
import PropTypes from 'prop-types';

import './statePages.scss';

function StatePages({ currentPage, lastPage }) {
  return (
    <p className="statePages">{currentPage} / {lastPage}</p>
  );
}

StatePages.propTypes = {
  currentPage: PropTypes.number.isRequired,
  lastPage: PropTypes.number.isRequired,
};

export default StatePages;
