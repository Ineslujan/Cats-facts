import React from 'react';
import PropTypes from 'prop-types';

import './title.scss';

function Title({ title }) {
  return (
    <p className="title">{title}</p>

  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
