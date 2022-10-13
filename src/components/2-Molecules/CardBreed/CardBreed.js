import React from 'react';
import PropTypes from 'prop-types';

function CardBreed({ breed }) {
  return (
    <article className="breed">
      <h2 className="breed-breed">{breed.breed}</h2>
      <h3 className="breed-country"><span className="breed-from">from : </span>{breed.country}</h3>
      <p className="breed-origin">Origin : {breed.origin}</p>
      <p className="breed-coat">Coat : {breed.coat}</p>
      <p className="breed-pattern">Pattern : {breed.pattern}</p>
    </article>
  );
}

CardBreed.propTypes = {
  breed: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
};

export default CardBreed;
