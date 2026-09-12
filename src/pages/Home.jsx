import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const pages = [
    {
      key: 1,
      title: 'Fibonacci Sequence',
    },
    {
      key: 2,
      title: 'Reverse a String',
    },
    {
      key: 3,
      title: 'Palindromes',
    },
    {
      key: 4,
      title: 'Anagrams',
    },
    {
      key: 5,
      title: 'Fizz Buzz',
    },
    {
      key: 6,
      title: 'Currying',
    },
    {
      key: 7,
      title: 'Local Storage',
    },
    {
      key: 8,
      title: 'Debouncing Methods',
    },
    {
      key: 9,
      title: 'Todo List',
    },
    {
      key: 10,
      title: 'TypeScript Search',
    },
    {
      key: 11,
      title: 'Create User Form',
    },
    {
      key: 12,
      title: 'Contains Dupliicate',
    },
    {
      key: 13,
      title: 'Two Sum',
    },
    {
      key: 14,
      title: 'Valid Anagram (v2)',
    },
    {
      key: 15,
      title: 'Moved Zeroes',
    },
    {
      key: 16,
      title: 'Best Time to Sell & Buy Stock',
    },
  ];

  return (
    <div className='Home'>
      <h1>Home</h1>
      <h3>Leetcode-style Challenges</h3>
      <div className='nav'>
        {pages.map((page) => {
          return (
            <Link className='links' to={`/challenge${page.key}`} key={page.key}>
              {page.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
