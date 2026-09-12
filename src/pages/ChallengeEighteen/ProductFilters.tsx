type ProductFiltersProps = {
  searchVal: string;
  inStock: boolean;
  onSearchChange: (value: string) => void;
  onStockChange: (value: boolean) => void;
};

const ProductFilters = ({
  searchVal,
  inStock,
  onSearchChange,
  onStockChange,
}: ProductFiltersProps) => {
  return (
    <div>
      <input
        placeholder='Search products'
        value={searchVal}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <label>
        <input
          type='checkbox'
          checked={inStock}
          onChange={(e) => onStockChange(e.target.checked)}
        />
        Only in stock
      </label>
    </div>
  );
};

export default ProductFilters;
