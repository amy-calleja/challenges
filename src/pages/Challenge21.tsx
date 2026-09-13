export default function ChallengeTwenty() {
  let n = 5;

  const showSequence = (num: number): number[] => {
    let sequence: number[] = [];
    let prev = 0;
    let curr = 1;

    for (let i = 0; i < num; i++) {
      // Loop to generate the Fibonacci sequence up to the specified number of terms
      sequence.push(prev); // Add the current Fibonacci number to the sequence & update the previous and current numbers for the next iteration
      let temp = curr;
      curr = prev + curr;
      prev = temp;
    }

    return sequence;
  };

  return (
    <div>
      <h2>Fibonacci Sequence</h2>
      <p>
        The Fibonacci sequence is a series of numbers where each number is the
        sum of the two preceding ones, usually starting with 0 and 1.
      </p>
      <p>Calculate the first {n} Fibonacci numbers.</p>
      {showSequence(n).join(', ')}
    </div>
  );
}
