import React from 'react';
import PropTypes from 'prop-types';

import './title.scss';

function Title({ title }) {
  return (
    <header className="title">{title}</header>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
