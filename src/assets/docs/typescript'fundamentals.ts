/* Tpescript fundamentals */

// Type for unions & composing types
type StringOrNumber = string | number;

// Interface for object contracts & when extention/declaration merging is useful
interface Person {
  name: string;
  age: number;
}

// Type for object contracts & when extention/declaration merging is not useful
type PersonType = {
  name: string;
  age: number;
};

// Type
type Todo = {
  id: number;
  title: string;
  completed: boolean;
  createdAt: Date;
};

//e.g.
const todo: Todo = {
  id: 1,
  title: 'Learn TypeScript',
  completed: false,
  createdAt: new Date(),
};

// Union types

type Status = 'success' | 'error' | 'loading';
//e.g.
type Todo = {
  id: string;
  title: string;
  status: Status; // can only be one of the three values
};

// Optional parrams
// use '?' when prop isn't always present
type User = {
  id: string;
  name: string;
  email?: string; // optional
};

// readonly
// use 'readonly' when prop shouldn't be changed after initialization/ are immutable
type User = {
  readonly id: string;
  name: string;
  email?: string;
};

// Intersection types
// use '&' to combine multiple types into one
type User = {
  id: string;
  name: string;
};

type Admin = {
  role: string;
};

type AdminUser = User & Admin; // has all properties of User and Admin

// Interface
// use 'interface' to define a contract for an object
interface Todo {
  id: string;
  title: string;
  vompleted: boolean;
}
//then:
const todo: Todo = {
  id: '1',
  title: 'Learn TypeScript',
  completed: false,
};
