import React from 'react';
import PropTypes from 'prop-types';

import './title.scss';
import { Link } from 'react-router-dom';

function Title({ title }) {
  return (
    <Link to="/">
      <h1 className="title">{title}</h1>
    </Link>

  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
