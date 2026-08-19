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
