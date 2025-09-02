import React from 'react';
import ProductCard from '../components/ProductCard.js';
import products from '../data/products.js';

function Products() {
  const groupedProducts = products.reduce((acc, product) => {
    const category = product.category || 'Uncategorized';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});

  return (
    <div>
      <h1>Our Plants</h1>
      {Object.entries(groupedProducts).map(([category, products]) => (
        <div key={category}>
          <h2>{category}</h2>
          <div className="row">
            {products.map(product => (
              <div className="col-md-4 mb-4" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
