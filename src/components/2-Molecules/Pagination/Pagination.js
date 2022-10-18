import React from 'react';
import PropTypes from 'prop-types';

import ButtonChangePage from '../../1-Atoms/ButtonChangePage/ButtonChangePage';
import StatePages from '../../1-Atoms/StatePages/StatePages';

import './pagination.scss';

function Pagination({
  currentPage, lastPage, getDatas, setSearchValue,
}) {
  return (
    <div className="pagination">
      <ButtonChangePage
        page={Number(currentPage) - 1}
        currentPage={currentPage}
        lastPage={lastPage}
        getDatas={getDatas}
        setSearchValue={setSearchValue}
      />
      <StatePages currentPage={currentPage} lastPage={lastPage} />
      <ButtonChangePage
        page={Number(currentPage) + 1}
        currentPage={currentPage}
        lastPage={lastPage}
        getDatas={getDatas}
        setSearchValue={setSearchValue}
      />
    </div>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  lastPage: PropTypes.number.isRequired,
  getDatas: PropTypes.func.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};

export default Pagination;
