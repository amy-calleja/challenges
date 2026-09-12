import React from 'react';

export default function ChallengeSeventeen() {
  const array1: string[] = ['(', ')', '{', '}', '[', ']'];
  const array2: string[] = ['(', '{', ')', '}', '[', ']'];
  const array3: string[] = ['(', '{', '[', ']', '}', ')'];

  const validate = (arr: string[]): boolean => {
    const stack: string[] = []; // Initialize an empty stack to keep track of opening brackets

    for (let i = 0; i < arr.length; i++) {
      // Iterate through each character in the input array
      const char = arr[i]; // Get the current character

      if (char === '(' || char === '{' || char === '[') {
        // If the character is an opening bracket, push it onto the stack
        stack.push(char);
      }

      if (char === ')') {
        // If the character is a closing bracket,
        if (stack.pop() !== '(') {
          // Take the last element from the stack and check if it matches the corresponding opening bracket
          return false;
        }
      }
      // repeat the same logic for the other types of brackets
      if (char === '}') {
        if (stack.pop() !== '{') {
          return false;
        }
      }
      if (char === ']') {
        if (stack.pop() !== '[') {
          return false;
        }
      }
    }

    return stack.length === 0; // If the stack is empty, all brackets are matched and closed correctly, so return true; otherwise, return false
  };

  return (
    <div>
      <h2>Valid Parentheses 🔗</h2>
      <p>Are brackets correctly opened and closed?</p>
      <h3>{array1.join(' ')}</h3>
      <p>{validate(array1) ? 'True' : 'False'}</p>
      <h3>{array2.join(' ')}</h3>
      <p>{validate(array2) ? 'True' : 'False'}</p>
      <h3>{array3.join(' ')}</h3>
      <p>{validate(array3) ? 'True' : 'False'}</p>
    </div>
  );
}
