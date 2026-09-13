export default function ChallengeNineteen() {
  const arr1 = [1, 3, 5, 7];
  const arr2 = [2, 4, 6, 8];

  const merged = [...arr1, ...arr2].sort((a, b) => a - b);

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
    </div>
  );
}
