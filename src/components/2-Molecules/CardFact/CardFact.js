import React from 'react';
import PropTypes from 'prop-types';

import './cardFact.scss';

function CardFact({ fact }) {
  return (
    <q className="facts-fact">
      {fact}
    </q>
  );
}

CardFact.propTypes = {
  fact: PropTypes.string.isRequired,
};

export default CardFact;
