import { useState } from "react";

export default function ChallengeFive() {
  const [result, setResult] = useState([]);

  const handleRun = () => {
    let res = [];

    for (let i = 1; i <= 100; i++) {
      if (i % 5 === 0 && i % 3 === 0) {
        res.push("FizzBuzz");
      } else if (i % 3 === 0) {
        res.push("Fizz");
      } else if (i % 5 === 0) {
        res.push("Buzz");
      } else {
        res.push(i);
      }
    }
    return res;
  };

  const handleSubmit = () => {
    let res = handleRun();
    setResult(res);
  };

  return (
    <>
      <>
        <h3>Fizz Buzz</h3>
        <p>
          Write a program that prints the numbers from 1 to 100. However:
        </p>{" "}
        <ul style={{ listStyleType: "none" }}>
          <li>For numbers that are multiples of 3, print "Fizz"</li>
          <li>For numbers that are multiples of 5, print "Buzz"</li>
          <li>
            For numbers that are multiples of both 3 and 5, print "FizzBuzz"
          </li>
          <li>If they're not multiples of either 3 or 5, print the number.</li>
        </ul>
      </>

      <div style={{ margin: "70px 0" }}>
        <p>{result.join(", ")}</p>
        <div style={{ margin: "70px 0" }}>
          {result.length <= 0 ? (
            <button onClick={handleSubmit}>Run FizzBuzz!</button>
          ) : (
            <button
              onClick={() => setResult([])}
              style={{ backgroundColor: "transparent" }}
            >
              Clear Result
            </button>
          )}
        </div>
      </div>
    </>
  );
}
