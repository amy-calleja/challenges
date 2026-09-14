import { useState } from 'react';
import ProductFilters from './ProductFilters';
import ProductList from './ProductList';
import { Product, productsList } from './products.ts';
import ProductCard from './ProductCard';
import Cart from './Cart.tsx';

export type CartItem = {
  product: Product;
  quantity: number;
};

export default function ChallengeEighteen() {
  const [searchVal, setSearchVal] = useState('');
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [showProduct, setShowProduct] = useState<number | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddItem = (product: Product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.product.id === product.id);

      if (existingItem) {
        return prev.map((item) =>
          item.product.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const handleRemoveItem = (product: Product) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.product.id === product.id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  const filteredProducts = productsList.filter((item) => {
    // Filter products based on search value and stock status
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchVal.toLowerCase());

    const matchesStock = !onlyInStock || item.inStock; // If onlyInStock is true, check if the item is in stock; otherwise, include all items

    return matchesSearch && matchesStock;
  });

  return (
    <div>
      <h2>Product Search & Cart 🥑</h2>
      <p>
        Make a product search and filter by name & instock only, combining other
        filters and a shopping cart.
      </p>
      <ProductFilters
        searchVal={searchVal}
        inStock={onlyInStock}
        onSearchChange={setSearchVal}
        onStockChange={setOnlyInStock}
      />

      <div className='cart-container'>
        <ProductList
          products={filteredProducts}
          setShowProduct={setShowProduct}
          handleAddItem={handleAddItem}
          handleRemoveItem={handleRemoveItem}
        />
        <Cart cartItems={cartItems} emptyCart={emptyCart} />
      </div>
      {showProduct && <ProductCard productId={showProduct} />}
    </div>
  );
}
