/* This file covers these basic fundamentals:
  -map
  -filter
  -reduce
  -find
  -some
  -every
  -forEach
  -spread syntax
  -destructuring
  -optional chaining
  -nullish coalescing
  -closures
  -callbacks
  -promises
  -async/await
*/

const numbers = [1, 2, 3, 4, 5];

//map - returns a new array with the results of calling a provided function on every element in the calling array
let map = numbers.map((num) => num * 2);
console.log("Mapped Numbers:", map); // [2, 4, 6, 8, 10]

//filter - returns a new array with elements that satisfy the condition
let filter = numbers.filter((num) => num % 2)
console.log("Filtered Numbers (Odd):", filter); // [1, 3, 5]

let filterEven = numbers.filter((num) => num % 2 === 0);
console.log("Filtered Numbers (Even):", filterEven); // [2, 4]

// reduce - returns a single value by applying a function to each element of the array
let reduce = numbers.reduce((accumulator, currentVal) => accumulator + currentVal, 0);
console.log("Reduced Sum:", reduce); // 15

// find - returns first element that satisfies the condition
let find = numbers.find((num) => num >= 3);
console.log("Found Number (>= 3):", find); // 3

// some - returns true if at least one element satisfies the condition
let some = numbers.some((num) => num < 4);
console.log("Some Numbers (< 4):", some); // true

// every - returns true if all elements satisfy the condition
let every = numbers.every((num) => num > 5);
console.log("Every Number (> 5):", every); // false

// forEach - executes a provided function once for each array element, not a new array
let each =  numbers.forEach((num) => num *3);
console.log("For Each (Multiplied by 3):", each); // undefined (forEach does not return a new array)
console.log(numbers.forEach((num) => console.log(num * 3))); // Logs 3, 6, 9, 12, 15 to the console

const users = [
  { id: 1, name: "Amy", active: true },
  { id: 2, name: "John", active: false },
  { id: 3, name: "Sarah", active: true },
];
/*
Without AI, implement:
getActiveUsers()
getUserById()
getUserNames()
deactivateUser()
*/

const getActiveUsers = (users: { id: number; name: string; active: boolean }[]) => {
    return users.filter((user) => user.active);
    // Returns an array of active users
};

const getUserById = (users: { id: number; name: string; active: boolean }[], id: number) => {
    return users.find((user) => user.id === id);
    // Returns the user object with the specified id, or undefined if not found
};

const getUserNames = (users: { id: number; name: string; active: boolean }[]) => {
    return users.map((user) => user.name);
    // Returns an array of user names
};

const deactivateUser = (users: { id: number; name: string; active: boolean }[], id: number) => {
    return users.map((user) => user.id === id ? { ...user, active: false } : user);
    // Returns a new array of users with the specified user deactivated (active set to false)
};

// spread sytax ... - creates SHALLOW copy/merge arrays or objs without mutating original
const updatedUsers = {
    ...users,
    active: false
}
const newNumbers = [ ...numbers, 6, 7, 8];

// destructuring - extract vals from objs or arrays
const [first, second, ...rest] = numbers;
console.log("First:", first); // 1

const { id, active } = users[0]; 
console.log(id); // 1

//destructuring in React props params
function User({name, active}: {name: string, active: boolean}) {
    return  <div> {name} is {active ? 'active' : 'inactive'} </div>;
}

//optional chaining '?' - when something may be null or undefined preventing errors
console.log(users[3]?.name);

//nullish coalescing '??' - returns right side specifically if left side is null or undefined
const userName = users[3]?.name ?? 'Unknown User';
console.log(userName); // 'Unknown User'

// '||' check for falsy value (null, undefined, 0, '', false) and returns right side
const count = 0 || 10
// returns 10 because 0 is falsy

// closures - function that has access to vars from outer scope where it was created, even after outer func has finished 
function createCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}
const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
// createCounter() already finished, but returned func still has access to count var from outer scope, so it can increment and return it

//callbacks - a func passed to another func as an agument, to be executed later
function greetUser(name: string, callback: (greeting: string) => void) {
    const greeting= 'Hello, ' + name;
    callback(greeting);
}

greetUser('Amy', (greeting) => {
    console.log(greeting); // Hello, Amy
});

<Button onClick={()=> handleClick()} /> // func passed to onClick is also a callback, executed when button is clicked

// promises - represents an asynchronous operation that will eventually complete (resolve) or fail (reject)
// 3 states: pending, fulfilled, rejeted

// .then() - called when promise is fulfilled
// .catch() - when promise is rejected
// .finally() -called when promise is settled
const fetchData = fetch('/api/data')
    .then((response)=> response.json())
    .then((data) => {
    console.log('Data fetched:', data)
    })
    .catch((error) => {
        console.log('error fetcing data:', error);
    });

//async/await - version writing Promises async manner, just easier to read
    async function fetchDataAsync(){
        try {
            const response = await fetch('/api/data');
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }


// event loop - JS is single threaded, but can handle async operations using event loop
// call stack - keeps track of function calls, when a function is called, it is added to the stack, when it returns, it is removed from the stack
// web APIs - browser provides APIs for async operations like setTimeout, fetch, DOM events
// task queue - when an async operation is completed, its callback is added to the task queue
// event loop - continuously checks if the call stack is empty, if it is, it takes the first callback from the task queue and pushes it onto the call stack

//final example of fundamentals combined

const getUser = async () => {
    const response = await fetch('api/user/1');
    const user = await response.json();

    return {
        ...user,
        dispayName: user.profile?.name ?? 'Anonymous'
    };
};

/* 
^^^the above contains:
-async/await
-Promises
-destructuring opportunities
-spread syntax
-optional chaining
-nullish coalescing
-closures if getUser captures variables from its surrounding scope
*/
