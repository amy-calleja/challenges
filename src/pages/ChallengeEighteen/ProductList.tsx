import React from 'react';
import type { Product } from './products.ts';

type ProductListProps = {
  products: Product[];
  setShowProduct: (productId: number) => void;
  handleAddItem: (product: Product) => void;
  handleRemoveItem: (product: Product) => void;
};

const ProductList = ({
  products,
  setShowProduct,
  handleAddItem,
  handleRemoveItem,
}: ProductListProps) => {
  return (
    <div>
      <h2>Product List</h2>

      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul>
          {products.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price.toFixed(2)}
              <button
                className='cart-actions'
                onClick={() => handleAddItem(item)}
              >
                +
              </button>
              <button
                className='cart-actions'
                onClick={() => handleRemoveItem(item)}
              >
                -
              </button>
              <button
                className='cart-actions'
                onClick={() => setShowProduct(item.id)}
              >
                View
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default React.memo(ProductList);
