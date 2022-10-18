import React from 'react';
import PropTypes from 'prop-types';

import './inputText.scss';

function InputText({ searchValue, setSearchValue }) {
  const handleInput = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <input onChange={handleInput} name="name" type="text" aria-label="Filter facts" id="search" className="searchForm-input" value={searchValue} placeholder="Filter fact by word..." />
  );
}

InputText.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};

export default InputText;
