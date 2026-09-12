export type Product = {
  id: number;
  name: string;
  category: 'fruit' | 'vegetable' | 'meat' | 'fish';
  price: number;
  inStock: boolean;
};

export const productsList: Product[] = [
  {
    id: 1,
    name: 'banana',
    category: 'fruit',
    price: 0.6,
    inStock: true,
  },
  {
    id: 2,
    name: 'apple',
    category: 'fruit',
    price: 0.8,
    inStock: true,
  },
  {
    id: 3,
    name: 'carrot',
    category: 'vegetable',
    price: 0.4,
    inStock: false,
  },
  {
    id: 4,
    name: 'broccoli',
    category: 'vegetable',
    price: 0.5,
    inStock: true,
  },
  {
    id: 5,
    name: 'chicken',
    category: 'meat',
    price: 5,
    inStock: true,
  },
  {
    id: 6,
    name: 'salmon',
    category: 'fish',
    price: 10,
    inStock: false,
  },
];
