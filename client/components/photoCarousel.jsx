
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function PhotoCarousel({ photos }) {
  const [x, setX] = useState(0);
  const goLeft = () => {
    setX(x + 100);
  };
  const goRight = () => {
    setX(x - 100);
  };
  return (
    <div className="carousel-container">
      {
        photos.map((photo) => (
          <div key={photo.id} className="carousel-slide" style={{ transform: `translateX(${x}%)` }}>
            <img src={photo} alt="" />
          </div>
        ))
      }
      <button type="button" id="goLeft" onClick={goLeft}>left</button>
      <button type="button" id="goRight" onClick={goRight}>right</button>
    </div>
  );
}

PhotoCarousel.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PhotoCarousel;
