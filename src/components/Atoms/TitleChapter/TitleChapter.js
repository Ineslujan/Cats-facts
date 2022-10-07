import React from 'react';
import PropTypes from 'prop-types';

import './titleChapter.scss';

function TitleChapter({ title }) {
  return (
    <p className="titleChapter">{title}</p>
  );
}

TitleChapter.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TitleChapter;
