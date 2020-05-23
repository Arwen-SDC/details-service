/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';


const Slide = ({ photo }) => (
  <img
    src={photo}
    alt=""
    style={{
      width: '100%',
      top: '0',
    }}
  />
);

Slide.propTypes = {
  photo: PropTypes.string.isRequired,
};

export default Slide;
