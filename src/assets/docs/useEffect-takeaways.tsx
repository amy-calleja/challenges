/*  useEffect

dependency arrays
cleanup
subscriptions
API requests
timers
stale closures
why effects shouldn't be used for derived state
"When should you NOT use useEffect?"


--> after React has rendered, synchronize something outside of React with the current state/props


key ideas outside of React.
-API requests
-timers
event listeners
-subscriptions
-DOM APIs
-websockets
-third-party libs

*/

//basic shape of useEffect hook.
import { useEffect } from 'react';

useEffect(() => {
  // side effect

  return () => {
    // cleanup
  }
}, [/*dependencies*/]); // dependency array

// dependency arrays
// the dependency array tells React when the effect needs to re-run.

//no dep array 
//means runs after every render
useEffect(() => {
    console.log('runs after every render');
});

//empty dep array
// runs only once after initial render
useEffect(() => {
    fetchUsers();
    console.log('runs after initial mount');

}, []);


//with dependencies
// if a dependency changes, the effect will re-run.
useEffect(() => {
    console.log('User changed:', userId);
}, [userId]); // runs when userId changes

// cleanup

// effeects can return a cleanup function
// runs before the component unmounts and before the effect re-runs again when deps change

useEffect(() => {
    const timer = setTimeout(() => {
        console.log('Timer done');
    }, 1000);

    return () => {
        clearTimeout(timer); // cleanup timer, prevents memory leaks
    }
}, []);

/*
Effect starts
    ↓
subscription/timer/listener exists
    ↓
dependency changes OR component unmounts
    ↓
cleanup
    ↓
new effect (if applicable)
*/

// subscriptions

// a classic example is subscribing to a websocket or an event emitter
useEffect(() => {
    const unsubscribe = subscribeToMessages( message => {
        console.log(message);
    })

    return () => {
        unsubscribe(); // cleanup subscription
    }
}, []);

/*
subscribe
   ↓
return unsubscribe

other e.g.s:
-websocket
-event emitter
-browser event listener
-firebase subscription
-observable subscription
*/

useEffect(() => {
    const handleReesize = () => {
        console.log(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize); // cleanup remove listener
    }
})

// API Requests

//as prev explained e.g.:

useEffect(() => {
     fetch(`/api/users/${userId}`)
     .then(response => response.json())
     .then(data => setUser(data));
}, [userId]); // **when userId changes, fetch the new user data

/*

userId = 1
    ↓
fetch user 1

userId = 2
    ↓
fetch user 2


--> race conditions can occur if the userId changes quickly before the previous fetch completes. 
request A → user 1
request B → user 2

B finishes first
A finishes afterwards

--> You can handle this by using a flag or abort controller to cancel previous requests.
*/

useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
        try { 
            const response = await fetch(`/api/users/${userId}`, { signal: controller.signal });
        } catch (error) {
            if (error.name === 'AbortError') {
                console.log('Fetch aborted');
            } else {
                console.error('Fetch error:', error);
            }
            return; // exit if fetch failed
        }
        const data = await response.json();
        setUser(data)
    }

    fetchData();

    return () => {
        controller.abort(); // cleanup previous request if userId changes or component unmounts
    };
}, [userId]); 

// timers
// timeout or intervaal timers setup n useEffect and cleaned up in the return function

useEffect(() => {
const timeout = setTimeout(() => {
    console.log('timer done');
}, 1000);

return () => {
    clearTimeout(timeout); // cleanup timer
}
}, []);


useEffect(() => {
    const interval = setInterval(() => {
        setCount(prev => prev +1);  // update state every 5 seconds, 'prev' to avoid STALE CLOSURE issues
        console.log('interval tick')
    }, 5000)

    return () => {
        clearInterval(interval); // cleanup interval
    }
}, []);

// stale closures 
// recognise patter above ^^^ to  update inside the interval callback using the previous state to avoid stale closure issues
// using the dependency array to include the state variable can also work, but it will re-run the effect and reset the interval every time the state changes, which is not ideal for intervals.

// why effects shouldn't be used for derived state
// derived state is state that can be computed from props or other state. 
// using useEffect to derive state can lead to unnecessary re-renders and complexity. 
// instead, compute derived state directly in the render or useMemo if expensive.

// ***when not to use useEffect
//-- effects are primarily used for side effects that need to happen after render or for synching external systems with React state.

// 1. for derived state (compute directly in render or useMemo)
// 2. for synchronous logic that can be done during render (e.g., calculations, formatting)
// 3. for state updates that can be handled by event handlers (e.g., onClick, onChange)
// 4. for side effects that don't depend on props/state (e.g., logging, analytics) - can be done outside of React or in event handlers

