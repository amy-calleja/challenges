import type { Product } from './products.ts';

type ProductListProps = {
  products: Product[];
  setShowProduct: (productId: number) => void;
};

const ProductList = ({ products, setShowProduct }: ProductListProps) => {
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
              <button className='cart-actions'>+</button>
              <button className='cart-actions'>-</button>
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

export default ProductList;
