/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ImageBarEntry from './ImageBarEntry.jsx';


const ImageBar = ({ photos }) => (
  <ImageBarWrapper>
    <Inner>
      {
        photos.map((photo, key) => (
          <ImageBarEntry
            photo={photo}
            alt=""
            number={key}
          />
        ))
      }
    </Inner>
  </ImageBarWrapper>
);

const ImageBarWrapper = styled.div`
  width: 100%;
  height: 70px;
  max-width: 910px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  grid-area: ImageBar;
  margin: 0 auto;
  padding-bottom: 40px;
  align-items: flex-start;
  overflow: hidden
`;

const Inner = styled.div`
  margin: 0 auto;
`;

ImageBar.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageBar;
