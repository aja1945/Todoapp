import React from 'react';

const ProductDetail = ({ product }) => {
  return (
    <div className="product-detail">
      <h2>Product Details</h2>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      {/* Add to cart button (if user is logged in) */}
    </div>
  );
};

export default ProductDetail;