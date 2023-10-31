import React, { useState, useEffect } from 'react';

const ProductListing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the server
    fetch('/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="product-listing">
      <h2>Available Products</h2>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductListing;