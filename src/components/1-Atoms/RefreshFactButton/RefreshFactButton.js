import React from 'react';
import PropTypes from 'prop-types';

import Refresh from '../ButtonRefresh/ButtonRefresh';

import './refreshFactButton.scss';

function RefreshFactButton({ getRandomFactDatas }) {
  return (
    <button type="button" className="button refreshButton" aria-label="Refresh random fact button" onClick={getRandomFactDatas}>
      <Refresh />
    </button>
  );
}

RefreshFactButton.propTypes = {
  getRandomFactDatas: PropTypes.func.isRequired,
};

export default RefreshFactButton;
