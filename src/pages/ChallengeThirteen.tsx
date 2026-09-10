export default function ChallengeThirteen() {
  const array = [8, 7, 3, 6, 2, 1];
  const target = 9;

    const answer = (arr: number[]): number[][] => {
        let results: number[][] = []
        
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] + arr[j] === target) {
                    //return `${arr[i]} & ${arr[j]}`; // return only the first match
                    results.push([arr[i], arr[j]]) // push each match and return array of matches
                }
            }
          
        };  return results
    }

  return (
    <>
      <h2>Two Sum</h2>

      <h3>
        Given an array of numbers and a target, find two numbers(value or index) that add up to
        the target
      </h3>
      <p>
        [{array.join(', ')}] 
      </p>
      <p>Target = {target}</p>
          <b>Solution: {answer(array).map(([a, b], index) => (
              <p key={index}>{a} + {b}</p>
          ))}
        </b>
    </>
  );
}
