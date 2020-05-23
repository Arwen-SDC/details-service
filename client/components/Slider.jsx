/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Slide from './Slide.jsx';


const getWidth = () => {
  if (window.innerWidth > 1375) {
    return 1100;
  }
  return (window.innerWidth * 0.8);
};

const Slider = ({ photos }) => {
  const [state, setState] = useState({
    activeSlide: 0,
    translate: 0,
    transition: 0.5,
  });

  const { translate, transition, activeSlide } = state;

  const nextSlide = () => {
    if (activeSlide === photos.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeSlide: 0,
      });
    }

    setState({
      ...state,
      activeSlide: activeSlide + 1,
      translate: (activeSlide + 1) * getWidth(),
    });
  };

  const prevSlide = () => {
    if (activeSlide === 0) {
      return setState({
        ...state,
        translate: (photos.length - 1) * getWidth(),
        activeSlide: photos.length - 1,
      });
    }

    setState({
      ...state,
      activeSlide: activeSlide - 1,
      translate: (activeSlide - 1) * getWidth(),
    });
  };


  return (
    <SliderCSS>
      <Tabs>
        <button type="button">VIDEOS</button>
        <button type="button">SCREENSHOTS</button>
      </Tabs>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * photos.length}
      >
        {
          photos.map((photo) => <Slide photo={photo} key={photo} />)
        }
      </SliderContent>
      <LeftButton onClick={prevSlide} />
      <RightButton onClick={nextSlide} />
    </SliderCSS>
  );
};

const SliderCSS = styled.div`
  position: relative;
  width: 80vw;
  max-width: 1100px;
  margin: 0 auto;
  padding-top: 45px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const SliderContent = styled.div`
  transform: translateX(-${(props) => props.translate}px);
  transition: transform ease-out ${(props) => props.transition}s;
  width: ${(props) => props.width}px;
  display: flex;
`;

const buttonStyles = `
  display: flex;
  position: absolute;
  height: 50px;
  width: 35px;
  cursor: pointer;
  outline: none;
  border: none;
`;

const LeftButton = styled.button`
  ${buttonStyles}
  left: 0;
  background: url('https://aragorn-images.s3-us-west-2.amazonaws.com/left-arrow.png');
`;

const RightButton = styled.button`
  ${buttonStyles}
  right: 0;
  background: url('https://aragorn-images.s3-us-west-2.amazonaws.com/right-arrow.png');
`;

const Tabs = styled.div`
  top: 0;
  position: absolute;
  margin: 0 auto;
  display: flex;
  width: 100%;
  justify-content: center;
  button{
    width: 190px;
    height: 45px;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    font-weight: 700;
    outline: none;
    letter-spacing: .5px;
    cursor: pointer;
  }
  button:hover{
    background-color: #d9d9d9;
  }
`;


Slider.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider;
