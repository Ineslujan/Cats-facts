import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './button.scss';

function Button({ name }) {
  const lowerName = `/${name.toLowerCase()}`;

  return (
    <Link to={lowerName} className="button"> {name} </Link>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
