import React from 'react';

const ProductCard = ({ image="hello", title="Hello", price="100" }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-info">
        <h2 className="product-title">{title}</h2>
        <p className="product-price">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
