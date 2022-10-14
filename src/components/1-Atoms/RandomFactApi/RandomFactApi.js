import PropTypes from 'prop-types';
import React from 'react';

function RandomFactApi({ dataFactApi }) {
  return (
    <q className="facts-fact">
      {dataFactApi && dataFactApi}
    </q>
  );
}

RandomFactApi.propTypes = {
  dataFactApi: PropTypes.string.isRequired,
};

export default RandomFactApi;
