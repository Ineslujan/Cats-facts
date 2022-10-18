import React from 'react';
import PropTypes from 'prop-types';

import InputText from '../../1-Atoms/InputText/InputText';

import './searchForm.scss';

function SearchForm({ searchValue, setSearchValue }) {
  return (
    <form className="searchForm">
      <InputText searchValue={searchValue} setSearchValue={setSearchValue} />
    </form>
  );
}

SearchForm.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};

export default SearchForm;
