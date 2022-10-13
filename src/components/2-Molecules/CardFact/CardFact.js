import React from 'react';
import PropTypes from 'prop-types';

function CardFact({ fact }) {
  return (
    <li className="facts-fact">
      {fact}
    </li>
  );
}

CardFact.propTypes = {
  fact: PropTypes.string.isRequired,
};

export default CardFact;
