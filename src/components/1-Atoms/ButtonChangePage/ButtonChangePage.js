import React from 'react';
import PropTypes from 'prop-types';

import './buttonChangePage.scss';

function ButtonChangePage({
  page,
  currentPage,
  lastPage,
  getDatas,
}) {
  return (
    <button
      type="button"
      onClick={() => { getDatas(page); }}
      className={(page !== 0 && page !== lastPage + 1) ? 'buttonChangePage' : 'buttonChangePage-inactive'}
    >
      {currentPage > page && '<'}{currentPage < page && '>'}
    </button>
  );
}

ButtonChangePage.propTypes = {
  page: PropTypes.number.isRequired,
  lastPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  getDatas: PropTypes.func.isRequired,
};

export default ButtonChangePage;
