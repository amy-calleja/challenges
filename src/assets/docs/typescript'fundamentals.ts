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

// function params
function add(a: number, b: number): number {
    return a + b;
}
 
// callback functions

// a function that recieves something and doesn't return anything:
// e.g. (todo: Todo) => void

function processTodo(
    todo: Todo,
    callback: (todo: Todo) => void 
) {
    callback(todo)
}

// generics
// lets you write reusable code while keeping type info

function getFirst<T>(items: T[]): T{ 
    return items[0]
}
//now
const firstTodo = getFirst<Todo>(todos);
//same generic declaration can use used for User[], Todo[], Product[], Message[] etc.
// doesn't have to be duplicated and rewritten every time

// any type
// turns off type checking
// use generic type instead as any is throwing away any type safety

// <T extends ...>
// extends puts a constraint on a generic, the generic can be  diff type but
// T can be any type but it must satisfy a particular requirement

function getId<T extends { id: string }>(item: T) { // T must have an 'id' of string
    return item.id;
}

getId({
    id: '123', // this works as id is string
    name: 'John'
})

/* type a function passed as React Prop */

type ButtonProps = {
    label: string;
 //   onClick: () => void;  //expect a func that yakes no args & returns nothing
    onDelete: (id: string) => void; // callback recieves a string & returns nothing
}
//then
function Button({ label, onDelete }: ButtonProps) {
    return (
        <button onClick={() => onDelete('123')}
    { label }
    </button>
    );
}


/* type an even handler */
// we must use React's event types

// change event
const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
) => {
    console.log(event.target.value);
};

// button
const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>
) => {
    console.log('clicked')
}

// void vs undefined
// void returns no useful value
// undefined means value is undefined
// a func can explicity return undefined, where void is commonly used to describe a return val isn't used

//optional function param
// when func can work with or without that arg
// make optional when func has a sensible default behaviour but that value isnt provided

function greet(name: string, greeting?: string) {
    return `${greeting ?? "Hello"} ${name}`; // accounts for greeting undefined
}

/* generic API response */ 
type ApiResponse<T> = {
    data: T;
    success: boolean;
    message: string;
};

type User = {
    id: string,
    name: string;
};

const response: ApiResponse<User> = {
    data: {
        id: '1',
        name: 'John'
    },
    success: true,
    message: 'Sucess'
};

// generic api resp type so common resp structure is reusable, while data is strongly typed
//multiple Users:
const response: ApiResponse<User[]> = {
    data: users,
    success: true,
    message: 'Success'
}

/* type a React component that works with diff data types */

// when i want toìthe same component to work with diff data types
// but still preserve safety
//e.g reusable dropdown
type SelectProps<T> = {
    options: T[];
    onSelect: (option: T) => void;
};

function Select<T>({
        options,
        onSelect
    }: SelectProps<T>) {
    //...
}

// component doesn't need to now what T is
// works with users or products:
<Select<User>
options={users}
onSelect ={(user) => {
    console.loog(UserActivation.name);
}}
/>

<Select<Product>
options={ products }
onSelect = {(product) => {
    console.log(product.price)
}}
/>