export default function ChallengeNineteen() {
  const arr1: number[] = [1, 3, 5, 7];
  const arr2: number[] = [2, 4, 6, 8];

  const merged = [...arr1, ...arr2].sort((a, b) => a - b);

  // solution using two pointers
  const pointerMerged = (arr1: number[], arr2: number[]): number[] => {
    // Initialize two pointers for each array & an empty array to store the merged result
    let i = 0;
    let j = 0;
    let merged: number[] = [];

    while (i < arr1.length && j < arr2.length) {
      // While both pointers are within the bounds of their respective arrays
      if (arr1[i] < arr2[j]) {
        // Compare the elements at the current pointers
        merged.push(arr1[i]); // If the element in arr1 is smaller, add it to the merged array and move the pointer in arr1 forward
        i++;
      } else {
        // If the element in arr2 is smaller or equal, add it to the merged array and move the pointer in arr2 forward
        merged.push(arr2[j]);
        j++;
      }
    }

    // After one of the arrays has been fully traversed, add any remaining elements from the other array to the merged array
    while (i < arr1.length) {
      merged.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      merged.push(arr2[j]);
      j++;
    }

    return merged;
  };

  return (
    <div>
      <h2>Merge Sorted Array 🧬</h2>
      <h3>[{arr1.join(', ')}]</h3>
      <h3>[{arr2.join(', ')}]</h3>
      <p>
        Implement a feature to merge two sorted arrays into a single sorted
        array.
      </p>
      <h3>[{merged.join(', ')}]</h3>
      <p>Merged with two pointer solution:</p>
      <h3>[{pointerMerged(arr1, arr2).join(', ')}]</h3>
    </div>
  );
}
