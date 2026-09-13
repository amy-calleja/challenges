export default function ChallengeTwenty() {
  const nums: number[] = [1, 3, 5, 7, 9, 11];
  const target: number = 7;

  // easy linear search
  const find: number = nums.findIndex((num) => num === target); // if no nums match the result is inbuilt '-1' already

  const binarySearch = (arr: number[], target: number): number => {
    // Initialize left and right pointers to the start and end of the array
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      // While the left index is less than or equal to the right index
      let middle = Math.floor((left + right) / 2); // Calculate the middle index by taking the floor of the average of left and right indices

      if (arr[middle] === target) {
        // If the middle element is equal to the target, return the middle index
        return middle;
      }

      // If the middle element is less than the target, search the right half of the array
      if (arr[middle] < target) {
        left = middle + 1;
      } else {
        // If the middle element is greater than the target, search the left half of the array
        right = middle - 1;
      }
    }
    return -1; // If the target is not found, return -1
  };

  return (
    <div>
      <h2>Binary Search 🔑</h2>
      <h3>[{nums.join(', ')}]</h3>
      <h3>Target number: {target}</h3>
      <p>
        Given a sorted array of numbers, find the index of a target number. If
        it doesn't exist, return -1.
      </p>
      <h3>Solution : {find}</h3>
      <h3>What is binary search? </h3>
      <p>
        A binary search is a fast search algorithm that works on sorted arrays.
        It divides the search interval in half repeatedly until the target value
        is found or the interval is empty.
      </p>
      <p>
        It is more efficient than linear search, especially for large datasets,
        since you are reducing the number of elements to be checked by half with
        each step.
      </p>
      <p>
        <b>The one thing to remember:</b> Binary search only works this way
        because the array is sorted. If the numbers are random, you cannot
        safely throw away half the array just because the middle number is too
        small or too big.
      </p>
      <h3>Binary search solution: {binarySearch(nums, target)}</h3>
    </div>
  );
}
