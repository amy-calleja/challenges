export default function ChallengeTwelve() {
  const array1: number[] = [8, 7, 3, 6, 2, 1];
  const array2: number[] = [1, 2, 5, 9, 3, 2];
  const array3: number[] = [2, 6, 6, 1, 0, 3];

  // solution one: using nested loops to compare each number with the numbers after it
  const check1 = (array: number[]): boolean => {
    for (let i = 0; i < array.length; i++) {
      // loop through the array to select a number
      for (let j = i + 1; j < array.length; j++) {
        // nested loop to compare the selected number with the number after it
        if (array[i] === array[j]) {
          // if we find two numbers that are the same, return true
          return true;
        }
      }
    }
    return false;
  };

  // solution two: using Set to store unique numbers and check for duplicates
  const check2 = (array: number[]): boolean => {
    let checked = new Set<number>(); // create a new set to store unique numbers

    for (const number of array) {
      // loop through the array
      if (checked.has(number)) {
        // if the number is already in the set, return true
        return true;
      }
      checked.add(number); // if the number is not in the set, add it to the set
    }
    return false;
  };

  // solution three: using Set to create a new array with unique numbers and compare the length of the new array with the original array
  const check3 = (array: number[]): boolean => {
    const noDupes: number[] = [...new Set(array)]; // create a new array with unique numbers using Set
    return noDupes.length !== array.length; // if the length of the new array is not equal to the original array, there are duplicates, return true; otherwise, return false
  };

  return (
    <div>
      <h2>Contains Duplicate</h2>
      <h3>Does an array contain any repeated value?</h3>
      <>
        <p>[{array1.join(', ')}]</p>
        <b>{check1(array1) ? 'True' : 'False'}</b>
      </>
      <>
        <p>[{array2.join(', ')}]</p>
        <b>{check2(array2) ? 'True' : 'False'}</b>
      </>
      <>
        <p>[{array3.join(', ')}]</p>
        <b>{check3(array3) ? 'True' : 'False'}</b>
      </>
    </div>
  );
}
