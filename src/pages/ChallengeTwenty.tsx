export default function ChallengeTwenty() {
  const nums: number[] = [1, 3, 5, 7, 9, 11];
  const target: number = 7;

  // easy linear search
  const find: number = nums.findIndex((num) => num === target); // if no nums match the result is inbuilt '-1' already

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
    </div>
  );
}
