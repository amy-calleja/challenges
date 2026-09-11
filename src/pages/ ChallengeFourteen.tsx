import React, { useState } from 'react';

export default function ChallengeFourteen() {
  const [string1, setString1] = useState('');
  const [string2, setString2] = useState('');
  const [result, setResult] = useState<boolean | null>(null);

  const handleCheck = (
    e: React.FormEvent<HTMLFormElement>,
    s1: string,
    s2: string
  ): void => {
    e.preventDefault();
    let str1 = s1.toLowerCase().split('').sort().join(''); // normalize the strings by converting to lowercase, splitting into an array of characters, sorting the array, and joining it back into a string
    let str2 = s2.toLowerCase().split('').sort().join('');

    setResult(str1 === str2);
  };

  return (
    <div>
      <h2>Valid Anagram? (v2)</h2>
      <h3>Do two strings contain the same letters with the same frequency?</h3>
      <h3>
        {result !== null &&
          (result ? 'Its an Anagram!' : 'Its not an Anagram :(')}
      </h3>
      <form onSubmit={(e) => handleCheck(e, string1, string2)}>
        <input
          placeholder='String 1'
          value={string1}
          onChange={(e) => setString1(e.target.value)}
        ></input>
        <input
          placeholder='String 2'
          value={string2}
          onChange={(e) => setString2(e.target.value)}
        ></input>
        <button>Check Anagram</button>
      </form>
    </div>
  );
}
