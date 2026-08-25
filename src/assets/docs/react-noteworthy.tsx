/* React Noteworthy */

/* 
//Render causes
- own state changes
- parent state changes/ rerenders
- context changes (if using the context API)
- props change as observed by React's reconciliation/memorisations
- if subscribed external store (like Redux) and the store state changes

// Reconciliation
- React compares the new virtual DOM with the previous one to figure out what's changed
- It identifies changes and updates the real DOM efficiently
- Key algorithms: Diffing, Reordering, and Reconciliation

*a re-render means react runs the component again, not necessarily updating the DOM

// keys
key help to identify which of themse items have changed, are added, or are removed. They should be unique and stable. Using index as key is not recommended if the list can change order or items can be added/removed.
- not use an array index as a key: since the index represents the position not the identity and can change/is dangeroud when the items have local state
(if list is always static and never reordered, inserted or deleted it could be acceptable.)

// controlled vs uncontrolled inputs
-controlled : from React state, value is set and changed via react state, onChange handler updates the state
e.g. text input, disable submit, error messages, conditional ui etc.

-uncontrolled: direct from the DOM, read when needed. value is set via ref, onChange handler not needed, can use defaultValue instead of value
e.g. large file upload, where you don't want to store the file in state, just read it when needed

// lifting state up
-moving state to the closest common parent of the components that need it
- allows for better state management, no dupes, and avoids prop drilling

//prop drilling
-passing props through components that don't actually need them, so a deeply nested component can recieve them
-use context API that could solve these issues

// React Context API
- share state across the component tree without prop drilling
-if data is relatively global part of the app
- create a context with React.createContext()
- provide the context value with <Context.Provider value={...}> and a setValue function to update it
- consume the context value with const user = useContext(Context) hook

eg. 
*/
// 1. Import & Create a context, create the state
import { createContext, useContext, useMemo, useState } from 'react';

const UserContext = createContext({ user: '', setUser: (name: string) => {} });

// 2. Provider wraps the component tree, shares the state
function App() {
  const [user, setUser] = useState<string>('John Doe');

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <App />
    </UserContext.Provider>
  );
}
// 3. comp that consumes context value & changes it
function Profile() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h1> Hello {user} </h1>
      <button onClick={() => setUser('Sarah')}>Change User</button>
    </div>
  );
}

/* Memorization

// React.memo
- A higher order component 
- memoizes a component render result
- Prevents unnecessary re-renders if props haven't changed
- Useful for optimizing functional components
- e.g. large lists with many rows, or components that receive props that rarely change
:
*/

const MemoizedComponent = React.memo(Component);

/*
// useMemo hook
- Returns a memoized calculated value
- Useful for optimizing expensive calculations
- recalculated if one of the dependencies changes

- is performance optimisation, not usually needed unless you have a performance issue
- use when calculation is expensive and the result can be cached based on dependencies
- e.g.:
*/
const filteredProducts = useMemo(() => {
  return products.filter((product) => product.name.includes(search));
}, [products, search]);

/*
// useCallback hook
- Returns a memoized callback function
- Useful for passing callbacks to child components to prevent unnecessary re-renders
- recalculated if one of the dependencies changes

- is performance optimisation, not usually needed unless you have a performance issue
- use when passing a callback to a child component that depends on props or state, 
    and you want to avoid re-creating the function on every render

    - e.g.: if a delete button is memorised and the delete function is passed as a prop, 
        it will not re-render unless the delete function changes
*/
const handleDelete = useCallback(
  (id: string) => deleteItem(id), // function that deletes an item by id
  [deleteItem]
);

const DeleteButton = React.memo(function DeleteButton({
  onDelete,
}: {
  onDelete: (id: string) => void;
}) {
  return <button onClick={() => onDelete(handleDelete)}>Delete</button>;
  // DeleteButton will only re-render if onDelete prop changes, which is memoized by useCallback
});

/*
// ****** Review ******

State / props / context change
             ↓
       Component renders
             ↓
   React creates new element tree
             ↓
       Reconciliation
             ↓
 React uses keys to understand identity
             ↓
      Minimal DOM updates



 // *** performance ***

 Component renders
       ↓
Expensive calculation?
       └── yes → useMemo might help

Function passed to memoized child?
       └── yes → useCallback might help




 // *** state architecture ***

Two siblings need the same state?
        ↓
   Lift state up

Too many layers passing the same data?
        ↓
   Consider Context 
