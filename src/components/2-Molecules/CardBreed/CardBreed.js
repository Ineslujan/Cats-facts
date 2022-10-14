import React from 'react';
import PropTypes from 'prop-types';

import './cardBreed.scss';

function CardBreed({ breed }) {
  return (
    <article className="breed">
      <h2 className="breed-breed">{breed.breed}</h2>
      <table>
        <tbody>
          <tr>
            <td className="breed-tag">from :</td>
            <td className="breed-data">{breed.country}</td>
          </tr>
          <tr>
            <td className="breed-tag">origin :</td>
            <td className="breed-data">{breed.origin}</td>
          </tr>
          <tr>
            <td className="breed-tag">coat :</td>
            <td className="breed-data">{breed.coat}</td>
          </tr>
          <tr>
            <td className="breed-tag">pattern :</td>
            <td className="breed-data">{breed.pattern}</td>
          </tr>
        </tbody>
      </table>
    </article>
  );
}

CardBreed.propTypes = {
  breed: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
};

export default CardBreed;
