import React from 'react';

const CardLoader = () => {
  return (
    <div className="card-loader-container">
      {Array.from({ length: 10 }).map((_, index) => (
        <div className="card-loader" key={index}>
          <div className="image-skeleton skeleton"></div>
          <div className="text-skeleton skeleton title"></div>
          <div className="text-skeleton skeleton price"></div>
        </div>
      ))}
    </div>
  );
};

export default CardLoader;
