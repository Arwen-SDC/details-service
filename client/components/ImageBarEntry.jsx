/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';


const ImageBarEntry = ({ photo, number }) => (
  <StyledBtn type="button">
    <img src={photo} alt={number} width="110px" height="60px" />
  </StyledBtn>
);


const StyledBtn = styled.button`
  overflow: hidden;
  width: 110px;
  height: 60px;
  border: none;
  outline: none;
`;

export default ImageBarEntry;
