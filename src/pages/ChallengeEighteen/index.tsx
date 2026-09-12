import { useState } from 'react';
import ProductFilters from './ProductFilters';
import ProductList from './ProductList';
import { productsList } from './products.ts';
import ProductCard from './ProductCard';

export default function ChallengeEighteen() {
  const [searchVal, setSearchVal] = useState('');
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [showProduct, setShowProduct] = useState<number | null>(null);

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

      <ProductList
        products={filteredProducts}
        setShowProduct={setShowProduct}
      />
      {showProduct && <ProductCard productId={showProduct} />}
    </div>
  );
}
