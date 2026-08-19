/* Understanding React State
-state vs local variables
-why state updates trigger renders
-functional state updates
-immutable updates
-stale state
-batching
-derived state
*/

// state vs local vars
/*
-variables are normally belonging to a func, re/initialised on every render, not preserved between renders eg. count++
-react State is preserved between renders, updating it triggers a re-render and it is used to store data that changes over time.


// why state updates trigger renders
calling state setter func schedule rerender of the component, 
react will compare the new result with a light weight virtual DOM of the previous one & update the real DOM where necessary


User clicks
    ↓
setCount(...)
    ↓
React schedules update
    ↓
Component renders again
    ↓
React compares the result
    ↓
DOM is updated where necessary


// functional state updates

-if new state depends on old state, use functional form of the setter to avoid stale state issues
-if batch updates are used (many state updates in one event), the state setter may not have latest value, 
so using functional form ensures you get the latest state value

    setCount(prevCount => prevCount + 1)

    setUser(prevUser => ({
    ...prevUser,
    name: 'New Name',
   }))

// immutable updates
-React state should be treated as immutable, meaning you should not modify the existing state directly. 
-Instead, create a new copy of the state with the necessary changes.
-This is important because React relies on detecting changes in state to determine when to re-render components.
-relies on reference id to determine whether a value has changed

e.g update an item
setItems((prevItems) => 
  prevItems.map(item => 
   item.id === id ? {
    ...item, completed: true
    } : item 
  ) 
)

// stale state
-callbacks/closures and async functions can lead to stale state issues, where the state value used in the callback is not the latest one.
-using functional updates can help avoid this issue, as it ensures that the latest state value is used when updating state.


// batching
-React batches state updates for performance reasons, meaning that multiple state updates can be grouped together and processed in a single render.
-This can lead to unexpected behavior if you rely on the state value immediately after calling a setter function, as the state may not have been updated yet.

- React 18 expanded automatic batching to many asynchronous contexts too.

e.g. explains why this doesn't always work as expected:
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
// returns 1 instead of 3 because the state updates are batched and the count value is stale in each call.
// use instead: setCount(prev => prev + 1); etc etc

// derived state
data you can calculate from existing state/props instead of storing it in more state.
avoids unnecessary state and keeps your component simpler and easier to maintain.


                 React render
                     │
                     ▼
              component function
                     │
             ┌───────┴────────┐
             │                │
        local variables      state
             │                │
        reset each render    persists
             │                │
        no render trigger    setter triggers render
                              │
                              ▼
                       new render
                              │
                              ▼
                     derived values

-----------------------------------------------------------

state update
     │
     ├── immutable update
     │
     ├── functional update
     │       ↓
     │   avoids stale previous state
     │
     └── batching
             ↓
        fewer renders
*/
