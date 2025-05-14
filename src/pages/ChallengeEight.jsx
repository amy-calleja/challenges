import { useState, useEffect, useCallback, useDeferredValue } from "react";
import axios from "axios";

// show a debounced search bar that filters a list of users
// show using old debounce method and new React hook method

export default function ChallengeEight() {
  const [users, setUsers] = useState([]);

  // debounce method 1:
  const [searchValue, setSearchValue] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  // debounce method 2:
  const [searchValue2, setSearchValue2] = useState("");

  // Fetch users on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users`
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);

  // DIY Debounce search & filter users
  useEffect(() => {
    const debouncedSearch = setTimeout(() => {
      if (searchValue) {
        setFilteredUsers(
          users.filter((user) =>
            user.name.toLowerCase().includes(searchValue.toLowerCase())
          )
        );
      } else {
        setFilteredUsers([]);
      }
    }, 500);

    return () => clearTimeout(debouncedSearch); //filter and clear timeout every 500ms
  }, [searchValue]);

  const handleSearch = useCallback((e) => {
    setSearchValue(e.target.value);
  }, []);

  const deferredValue = useDeferredValue(searchValue2);
  const filteredUsers2 = users.filter((user) =>
    user.name.toLowerCase().includes(deferredValue.toLowerCase())
  );

  return (
    <div className="ChallengeEight">
      <h2>Fast typer? Debounced Search Bar!</h2>
      <p>
        Fetch users from and API and filter using debounce with a dynamic search
        value.
      </p>
      <div className="container">
        <div className="column">
          <h3>Classic Debounce Method</h3>
          <p>
            Type in the search bar to filter users. The search is debounced for
            500 milliseconds.
          </p>
          <input
            type="text"
            placeholder="Search users..."
            value={searchValue}
            onChange={handleSearch}
            style={{ width: "50%" }}
          />
          <div style={{ margin: "15px" }}>
            <label htmlFor="user-select">
              Select a user:
              <select
                style={{ margin: "0 10px" }}
                name="user-select"
                id="user-select"
              >
                {searchValue && filteredUsers.length > 0
                  ? filteredUsers.map((user) => (
                      <option value={user.name} key={user.id}>
                        {user.name}
                      </option>
                    ))
                  : !searchValue
                  ? users.map((user) => (
                      <option value={user.name} key={user.id}>
                        {user.name}
                      </option>
                    ))
                  : [
                      <option value="no-users" key="no-users" disabled>
                        No users found
                      </option>,
                    ]}
              </select>
            </label>
          </div>
        </div>
        <div className="column">
          <h3>React Hook Debounce Method</h3>
          <p>
            This search bar will similarly 'defer' the set state of the search
            with React's useDeferredValue hook, prioritising first the main
            typing event.
          </p>
          <input
            type="text"
            placeholder="Search users..."
            value={searchValue2}
            onChange={(e) => setSearchValue2(e.target.value)}
            style={{ width: "50%" }}
          />
          <div style={{ margin: "15px" }}>
            <label htmlFor="user-select2">
              Select a user:
              <select
                style={{ margin: "0 10px" }}
                name="user-select"
                id="user-select"
              >
                {searchValue2 && filteredUsers2.length > 0
                  ? filteredUsers2.map((user) => (
                      <option value={user.name} key={user.id}>
                        {user.name}
                      </option>
                    ))
                  : !searchValue2
                  ? users.map((user) => (
                      <option value={user.name} key={user.id}>
                        {user.name}
                      </option>
                    ))
                  : [
                      <option value="no-users" key="no-users" disabled>
                        No users found
                      </option>,
                    ]}
              </select>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
