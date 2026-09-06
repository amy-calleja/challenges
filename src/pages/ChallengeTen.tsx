import { useState, useEffect } from 'react';

type User = {
  id: number;
  name: string;
  email: string;
};

export default function ChallengeTen() {
  const [search, setSearch] = useState<string>('');
  const [users, setUsers] = useState<User[]>([]);
  const [filtered, setFiltered] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = () => {
      fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch users');
          }
          return response.json();
        })
        .then((data: User[]) => setUsers(data))
        .catch(() => setError('Failed to load users'))
        .finally(() => setLoading(false));
    };
    fetchData();
  }, []);

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (search !== '') {
        setFiltered(
          users.filter((user) =>
            user.name.toLowerCase().includes(search.toLowerCase())
          )
        );
      } else {
        setFiltered(users);
      }
    }, 200);

    return () => clearTimeout(debounce);
  }, [search, users]);

  return (
    <div>
      <h2>TypeScript Search</h2>
      <h3>Build a small searchable user list using TypeScript</h3>
      <p>
        Requirements: typed user model, search, filtering, loading state, error
        state, empty state, callback props, no any
      </p>
      <input
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {error && <p>{error}</p>}
      {!error && loading && <p>loding...</p>}
      {!error && !loading && filtered.length === 0 && <p>No users found</p>}
      <ul>
        {!error &&
          filtered.length > 0 &&
          !loading &&
          filtered.map((user) => <li key={user.id}> {user.name}</li>)}
      </ul>
    </div>
  );
}
