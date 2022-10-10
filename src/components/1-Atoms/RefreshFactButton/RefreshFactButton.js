import React from 'react';
import PropTypes from 'prop-types';

import './refreshFactButton.scss';

function RefreshFactButton({ getRandomFactDatas }) {
  return (
    <button type="button" className="refreshButton" onClick={getRandomFactDatas}> 🔁 </button>
  );
}

RefreshFactButton.propTypes = {
  getRandomFactDatas: PropTypes.func.isRequired,
};

export default RefreshFactButton;
