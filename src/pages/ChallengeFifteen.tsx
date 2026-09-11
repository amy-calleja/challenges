export default function ChallengeFifteen() {
  const arr = [0, 1, 0, 3, 12];

  const moveZeroes = (array: number[]): number[] => {
    let moved: number[] = [];

    for (let i = 0; i < array.length; i++) {
      // loop through the array
      if (array[i] !== 0) {
        // if the number is not zero, push it to the moved array
        moved.push(array[i]); // push non-zero numbers to the moved array
      }
    }
    while (moved.length < array.length) {
      // while the moved array is shorter than the original array
      moved.push(0); // push zeroes to the end of the moved array
    }
    return moved;
  };

  const movedZeroesV2 = (array: number[]): number[] => {
    const filtered: number[] = array.filter((num) => num !== 0); // filter out the zeroes from the original array

    while (filtered.length < array.length) {
      // while the filtered array is shorter than the original array
      filtered.push(0); // push zeroes to the end of the filtered array
    }
    return filtered;
  };

  return (
    <div>
      <h2>Move Zeroes 🫧</h2>
      <h3>[{arr.join(', ')}]</h3>
      <p>
        Move all zeroes to the end while keeping the other numbers in the same
        order.
      </p>

      <h3>Solution 1: [{moveZeroes(arr).join(', ')}] </h3>
      <h3>Solution 2: [{movedZeroesV2(arr).join(', ')}] </h3>
    </div>
  );
}
