import PropTypes from 'prop-types';
import React from 'react';

function RandomFactApi({ dataFactApi }) {
  console.log('RandomFactApi', dataFactApi);

  return (
    <q>
      {dataFactApi && dataFactApi}
    </q>
  );
}

RandomFactApi.propTypes = {
  dataFactApi: PropTypes.string.isRequired,
};

export default RandomFactApi;
