import React from 'react';
import { productsList } from './products';

const ProductCard = ({ productId }: { productId: number }) => {
  const product = productsList.find((item) => item.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
    </div>
  );
};

export default ProductCard;
